import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFhirPractitioner, IFhirSearchResourceEntry, IFhirSearchResponse } from '@red-probeaufgabe/types';
import { AbstractBaseFhirSearchService } from '../abstract-base-fhir-search.service';
import { PRACTITIONER } from './practitioner-mock-datas';

@Injectable()
export class MockPractitionerSearchService extends AbstractBaseFhirSearchService<IFhirPractitioner> {

  constructor() {
    super();
  }

  search(query: string, count = 50): Observable<IFhirSearchResponse<IFhirPractitioner>> {
    return of<IFhirSearchResponse<IFhirSearchResourceEntry<IFhirPractitioner>>>(PRACTITIONER).pipe(
      map((data: IFhirSearchResponse<IFhirSearchResourceEntry<IFhirPractitioner>>) =>
        this.mapToFhirSearchResource(data),
      ));
  }

  findById(idx: string): Observable<IFhirPractitioner> {
    return of<IFhirPractitioner>(PRACTITIONER.entry.find(id => idx));
  }
}
