import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, tap } from 'rxjs/operators';
import { SiteTitleService } from '@red-probeaufgabe/core';
import { FhirSearchFn, IFhirPatient, IFhirPractitioner, IFhirSearchResponse, IPreparedIFhirPatient, IPreparedIFhirPractitioner } from '@red-probeaufgabe/types';
import { IUnicornTableColumn } from '@red-probeaufgabe/ui';
import { AbstractSearchFacadeService, FhirUtilService, SearchFacadeService } from '@red-probeaufgabe/search';
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
export class DashboardComponent implements OnInit {
  // Init unicorn columns to display
  columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>([
    'number',
    'resourceType',
    'name',
    'gender',
    'birthDate',
  ]);
  isLoading = true;



  /*
   * Implement search on keyword or fhirSearchFn change
   **/
  search$: Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>>;

  entries$: Observable<Array<IFhirPatient | IFhirPractitioner>>;

  totalLength$: Observable<number>;

  selectedEntry$: Observable<IPreparedIFhirPatient | IPreparedIFhirPractitioner>;


  // Bug Fix es wurde hier versehendlich der Abstact Service injected, diese kann jedoch da es sich um eine abstract class handelt vom Angular Injection Service nicht instanziert werden, ausserdem ist kein provider bekannt. Man muss Angular inm Decorator unter providers mitteilen, 
  // dass er für AbstractSearchFacadeService die konkrete klasse SearchFacadeService verwenden soll, da diese Deklaration vererbt wird gilt dies auch für die Child Components vom dashboard, ausser diese wird dort überschrieben oder die vererbung
  // über eine option unterbrochen.
  constructor(private siteTitleService: SiteTitleService, private fhitService: FhirUtilService, private searchFacade: AbstractSearchFacadeService) {
    this.siteTitleService.setSiteTitle('Dashboard');
  }
  ngOnInit(): void {
    this.searchResource({ name: '', resourceType: FhirSearchFn.SearchAll });
  }

  /**
   * filter/search the result in the list will alled from the search-form
   * @param search - Search for name and resourcetype
   */
  searchResource(search: ISearchResource): void {
    this.isLoading = true;
    this.search$ = this.searchFacade
      .search(search.resourceType, search.name)
      .pipe(
        catchError(this.handleError),
        tap((data) => {
          this.isLoading = false;
        }),
        shareReplay(),
      );

    this.entries$ = this.search$.pipe(
      map((data) => !!data && data.entry),
      startWith([]),
    );

    this.totalLength$ = this.search$.pipe(
      map((data) => !!data && data.total),
      startWith(0),
    );
  }

  /**
   * 
   * @param row - Row form the table that is clicked to view the details
   */
  selectedRow(row: IFhirPatient | IFhirPractitioner): void {
    let presentationData = this.fhitService.prepareData(row);
    console.log(presentationData);
    this.selectedEntry$ = of(presentationData);
  }

  private handleError(): Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> {
    return of({ entry: [], total: 0 });
  }
}
