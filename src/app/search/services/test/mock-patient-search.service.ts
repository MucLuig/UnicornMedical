import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFhirPatient, IFhirSearchResourceEntry, IFhirSearchResponse } from '@red-probeaufgabe/types';
import { AbstractBaseFhirSearchService } from '../abstract-base-fhir-search.service';
import { PractitionerSearchService } from '../practitioner-search.service';
import { PATIENT } from './patient-mock-datas';

@Injectable()
export class MockPatientSearchService extends AbstractBaseFhirSearchService<IFhirPatient> {

  constructor() {
    super();
  }

  search(query: string, count = 50): Observable<IFhirSearchResponse<IFhirPatient>> {
    // return the mock test data as observable
    return of<IFhirSearchResponse<IFhirSearchResourceEntry<IFhirPatient>>>(PATIENT).pipe(
      map((data: IFhirSearchResponse<IFhirSearchResourceEntry<IFhirPatient>>) => this.mapToFhirSearchResource(data)),
    );
  }

  findById(id: string): Observable<IFhirPatient> {
    // search by id the test datas
    return of<IFhirPatient>(PATIENT.entry.find(id => id));
  }
}
