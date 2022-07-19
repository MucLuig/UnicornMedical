import { TestBed } from '@angular/core/testing';
import { FhirSearchFn } from '../../types';
import { PatientSearchService } from './patient-search.service';
import { PractitionerSearchService } from './practitioner-search.service';
import { SearchFacadeService } from './search-facade.service';
import { MockPatientSearchService } from './test/mock-patient-search.service';
import { MockPractitionerSearchService } from './test/mock-practitioner-search.service';

/**
 * Optionale Zusatzaufgabe
 * Test the SearchFacadeService against mock datas so the test is robust and break not if the api datas change.
 * A other benefit ist that the machine that execute the tests before delive must have no access to the endpoint.
 */
describe('SearchFacadeService', () => {

  let searchFacadeService: SearchFacadeService;



  beforeEach(async () => {
    // config a testbed with mocked search services so we ar indendent from changing of api datas 
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [{
        provide: PatientSearchService, useClass: MockPatientSearchService
      },
      {
        provide: PractitionerSearchService, useClass: MockPractitionerSearchService
      }, SearchFacadeService
      ],
    });
    searchFacadeService = TestBed.inject(SearchFacadeService);

  });

  // tslint:disable:no-empty
  test('should init', () => { expect(searchFacadeService).toBeTruthy(); });

  test('should find patients', done => {
    // should find 8 entry with name duck from mock test data
    searchFacadeService.searchPatients("Duck").subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.entry.length).toEqual(8);
      // check is the resourceType from all hit´s 'Patient'
      const countResourceType = data.entry.filter(e => e.resourceType == 'Patient').length;
      expect(countResourceType).toEqual(8);
      // verify duck is given or family name
      const name = data.entry.filter(e => e.name.find(x => x.family == 'Duck' || x.given.find(x => 'Duck'))).length;
      expect(name).toEqual(8);
      done();
    });
  });

  test('should find practitioners', done => {
    // should find 8 entry with name duck from mock test data
    searchFacadeService.searchPractitioners("Duck").subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.entry.length).toEqual(1);
      // check is the resourceType from all hit´s 'Patient'
      const countResourceType = data.entry.filter(e => e.resourceType == 'Practitioner').length;
      expect(countResourceType).toEqual(1);
      // verify duck is given or family name
      const name = data.entry.filter(e => e.name.find(x => x.family == 'Duck' || x.given.find(x => 'Duck'))).length;
      expect(name).toEqual(1);
      done();
    });
  });

  test('should find both', done => {
    // should find 9 entry with name duck from mock test data ( 8 = patients and 1 practitioner )
    searchFacadeService.search(FhirSearchFn.SearchAll, "Duck").subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.entry.length).toEqual(9);
      // check is the resourceType from all hit´s 'Patient'
      const countPractitioner = data.entry.filter(e => e.resourceType == 'Practitioner').length;
      expect(countPractitioner).toEqual(1);
      const countPatient = data.entry.filter(e => e.resourceType == 'Patient').length;
      expect(countPatient).toEqual(8);
      // verify duck is given or family name
      const name = data.entry.filter(e => e.name.find(x => x.family == 'Duck' || x.given.find(x => 'Duck'))).length;
      expect(name).toEqual(9);
      done();
    });
  });

  test('merge arrays', done => {
    // should find 9 entry with name duck from mock test data ( 8 = patients and 1 practitioner )
    searchFacadeService.searchAll("Duck").subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.entry.length).toEqual(9);
      // check is the resourceType from all hit´s 'Patient'
      const countPractitioner = data.entry.filter(e => e.resourceType == 'Practitioner').length;
      expect(countPractitioner).toEqual(1);
      const countPatient = data.entry.filter(e => e.resourceType == 'Patient').length;
      expect(countPatient).toEqual(8);
      // verify duck is given or family name
      const name = data.entry.filter(e => e.name.find(x => x.family == 'Duck' || x.given.find(x => 'Duck'))).length;
      expect(name).toEqual(9);
      done();
    });
  });
});
