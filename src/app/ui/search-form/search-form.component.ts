import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FhirSearchFn } from '@red-probeaufgabe/types';
import { ISearchResource } from '../models/search-resource.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {

  private searchSubject = new Subject<ISearchResource>();

  @Output()
  search: Observable<ISearchResource> = this.searchSubject.asObservable();



  searchForm: FormGroup;

  private formSubscription: Subscription;

  /** Implement Search Form */
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchField: ["", [Validators.pattern("[0-9a-zA-Z]+")]],
      personType: "all"
    });

    // Suche nur wenn das form valid ist und zur optimierung debouncetime und distinctUntilChanged um die anzahl unnötiger api search calls zu reduzieren und die user experiancew zu erhöhen
    this.formSubscription = this.searchForm.valueChanges.pipe(filter(() => this.searchForm.valid == true), debounceTime(400), distinctUntilChanged()).subscribe(v => {
      let searchResourceType: FhirSearchFn = v.personType === 'all' ? FhirSearchFn.SearchAll : v.personType === 'patients' ? FhirSearchFn.SearchPatients : FhirSearchFn.SearchPractitioners;
      this.searchSubject.next({ name: v.searchField, resourceType: searchResourceType });
    });
  }

  ngOnDestroy(): void {
    // es handelt sich hier um ein longlive observable, so müssen wir unbedingt dafür sorgen unsubscribe aufzurufen, sonst kommt es zu mem-leaks!
    this.formSubscription.unsubscribe();
  }

}
