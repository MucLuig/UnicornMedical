import { TestBed } from '@angular/core/testing';
import { PatientSearchService } from './patient-search.service';
import { PractitionerSearchService } from './practitioner-search.service';
import { SearchFacadeService } from './search-facade.service';

/**
 * Optionale Zusatzaufgabe
 */
describe('SearchFacadeService', () => {
  let patientSearchService: PatientSearchService;
  let practitionerSearchService: PractitionerSearchService;
  let searchFacadeService: SearchFacadeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SearchFacadeService],
    });
    patientSearchService = TestBed.inject(PatientSearchService);
    practitionerSearchService = TestBed.inject(PractitionerSearchService);
    searchFacadeService = TestBed.inject(SearchFacadeService);


  });
  // tslint:disable:no-empty
  test('should init', () => { expect(searchFacadeService).toBeTruthy('can´t create service SearchFacadeService'); });

  test('should find patients', () => {
    // searchFacadeService.searchPatients("")
  });

  test('should find practitioners', () => { });

  test('should find both', () => { });

  test('merge arrays', () => { });
});
