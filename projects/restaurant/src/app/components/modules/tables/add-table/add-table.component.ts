import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Add Table", url: "/home/tables/add-table" },
  ];

  ngOnInit(): void {
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

          sessionStorage.setItem('restaurant_table_id', res.id);
          this.router.navigateByUrl('/suite/tables/view-table');
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

}
