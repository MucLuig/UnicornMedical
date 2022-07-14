import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUnicornTableColumn } from '../models';
import { IFhirPatient, IFhirPractitioner } from '@red-probeaufgabe/types';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // TODO: leider nicht mein tag => event mit id and dashboard schicken dann mit api die datensatz holen dann mat_dialog in dashboard öffnen oder route navigation so würde ich weitermachen

  showDetail(row: any) {
    console.log(row);
    alert("ResourceType:" + row.resourceType + " - Name:" + row.name[0].family + " " + row.name[0].given[0])
  }
}
