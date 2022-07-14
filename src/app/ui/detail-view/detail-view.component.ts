import { Component, Input, OnInit } from '@angular/core';
import { FhirUtilService } from '@red-probeaufgabe/search';
import { IFhirPatient, IFhirPractitioner, IPreparedIFhirPatient, IPreparedIFhirPractitioner } from '@red-probeaufgabe/types';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input()
  data: IPreparedIFhirPatient | IPreparedIFhirPractitioner;


  constructor() { }

  ngOnInit(): void {
  }

}
