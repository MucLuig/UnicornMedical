import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, tap } from 'rxjs/operators';
import { SiteTitleService } from '@red-probeaufgabe/core';
import { FhirSearchFn, IFhirPatient, IFhirPractitioner, IFhirSearchResponse } from '@red-probeaufgabe/types';
import { IUnicornTableColumn } from '@red-probeaufgabe/ui';
import { AbstractSearchFacadeService, SearchFacadeService } from '@red-probeaufgabe/search';
import { ISearchResource } from 'app/ui/models/search-resource.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Bug Fix es wurde hier versehendlich der Abstact Service injected, diese kann jedoch da es sich um eine abstract class handelt vom Angular Injection Service nicht instanziert werden, ausserdem ist kein provider bekannt. Man muss Angular inm Decorator unter providers mitteilen, 
  // dass er für AbstractSearchFacadeService die konkrete klasse SearchFacadeService verwenden soll, da diese Deklaration vererbt wird gilt dies auch für die Child Components vom dashboard, ausser diese wird dort überschrieben oder die vererbung
  // über eine option unterbrochen.
  providers: [
    {
      provide: AbstractSearchFacadeService,
      useClass: SearchFacadeService,
    }
  ]
})
export class DashboardComponent {
  // Init unicorn columns to display
  columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>([
    'number',
    'resourceType',
    'name',
    'gender',
    'birthDate',
  ]);
  isLoading = true;


  searchResource(v: ISearchResource): void {
    this.entries$ = this.searchFacade
      .search(v.resourceType, v.name)
      .pipe(
        catchError(this.handleError),
        tap((data) => {
          this.isLoading = false;
        }),
        shareReplay(),
      ).pipe(
        map((data) => !!data && data.entry),
        startWith([]),
      );
  }
  /*
   * Implement search on keyword or fhirSearchFn change
   **/
  search$: Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> = this.searchFacade
    .search(FhirSearchFn.SearchAll, "")
    .pipe(
      catchError(this.handleError),
      tap((data) => {
        this.isLoading = false;
      }),
      shareReplay(),
    );

  entries$: Observable<Array<IFhirPatient | IFhirPractitioner>> = this.search$.pipe(
    map((data) => !!data && data.entry),
    startWith([]),
  );

  totalLength$ = this.search$.pipe(
    map((data) => !!data && data.total),
    startWith(0),
  );

  // Bug Fix es wurde hier versehendlich der Abstact Service injected, diese kann jedoch da es sich um eine abstract class handelt vom Angular Injection Service nicht instanziert werden, ausserdem ist kein provider bekannt. Man muss Angular inm Decorator unter providers mitteilen, 
  // dass er für AbstractSearchFacadeService die konkrete klasse SearchFacadeService verwenden soll, da diese Deklaration vererbt wird gilt dies auch für die Child Components vom dashboard, ausser diese wird dort überschrieben oder die vererbung
  // über eine option unterbrochen.
  constructor(private siteTitleService: SiteTitleService, private searchFacade: AbstractSearchFacadeService) {
    this.siteTitleService.setSiteTitle('Dashboard');
  }

  private handleError(): Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> {
    return of({ entry: [], total: 0 });
  }
}
