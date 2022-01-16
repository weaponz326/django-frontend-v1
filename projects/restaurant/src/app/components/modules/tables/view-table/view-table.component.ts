import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
    { text: "View Table", url: "/home/tables/view-table" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSingleTable();
  }

  getSingleTable(){
    this.tablesApi.getSingleTable()
      .subscribe(
        res => {
          console.log(res);
          this.tableForm.tableNumberInput.value = res.table_number;
          this.tableForm.tableTypeInput.value = res.table_type;
          this.tableForm.capacityNumericTextBox.value = res.capacity;
          this.tableForm.locationInput.value = res.location;
          this.tableForm.tableStatusDropDownList.value = res.table_status;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveTable(){
    console.log('u are saving a new table');

    var tableData = {
      account: localStorage.getItem('restaurant_id'),
      table_number: this.tableForm.tableNumberInput.value,
      table_type: this.tableForm.tableTypeInput.value,
      capacity: this.tableForm.capacityNumericTextBox.value,
      location: this.tableForm.locationInput.value,
      table_status: this.tableForm.tableStatusDropDownList.value,
    }

    console.log(tableData);

    this.tablesApi.postTable(tableData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
