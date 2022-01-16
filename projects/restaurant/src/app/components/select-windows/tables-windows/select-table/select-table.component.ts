import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {

  constructor(private tablesApi: TablesApiService) { }

  @Output() rowSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

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
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(event: any){
    this.rowSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
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
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Table Number", dataField: "table_number", width: "40%" },
      { label: "Table Type", dataField: "table_type", width: "60%" },
    ]
  }

}
