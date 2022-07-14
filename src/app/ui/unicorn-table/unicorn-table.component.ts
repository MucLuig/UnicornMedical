import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUnicornTableColumn } from '../models';
import { IFhirPatient, IFhirPractitioner } from '@red-probeaufgabe/types';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-unicorn-table',
  templateUrl: './unicorn-table.component.html',
  styleUrls: ['./unicorn-table.component.scss'],
})
export class UnicornTableComponent implements OnInit {
  dataSource: MatTableDataSource<IFhirPatient | IFhirPractitioner> = new MatTableDataSource([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>();
  @Input() totalLength = 0;
  @Input() isLoading = false;
  @Input()
  set entries(value: Array<IFhirPatient | IFhirPractitioner>) {
    this.dataSource.data = value;
  }

  private selectItemSubject = new Subject<IFhirPatient | IFhirPractitioner>();

  @Output()
  selectItem: Observable<IFhirPatient | IFhirPractitioner> = this.selectItemSubject.asObservable();



  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Will called if a row clicked by user and signal this via subject to the parent control
   * @param row Datas of the patient or practitioner
   */
  selectTableRow(row: IFhirPatient | IFhirPractitioner) {
    this.selectItemSubject.next(row);
  }
}
