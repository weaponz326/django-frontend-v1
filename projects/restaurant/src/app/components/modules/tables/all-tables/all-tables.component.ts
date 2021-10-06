import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-tables',
  templateUrl: './all-tables.component.html',
  styleUrls: ['./all-tables.component.scss']
})
export class AllTablesComponent implements OnInit {

  constructor(private tablesApi: TablesApiService) { }

  @ViewChild('addMenuTableButtonReference', { read: ButtonComponent, static: false }) addTableButton!: ButtonComponent;
  @ViewChild('tablesGridReference', { read: GridComponent, static: false }) tablesGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getTables(){
    this.tablesApi.getTables()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getTables(),
        dataFields:[
          'id: string',
          'table_number: string',
          'table_type: string',
          'table_status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Table Number", dataField: "table_number", width: "30%" },
      { label: "Table Type", dataField: "table_type", width: "35%" },
      { label: "Table Status", dataField: "table_status", width: "35%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
