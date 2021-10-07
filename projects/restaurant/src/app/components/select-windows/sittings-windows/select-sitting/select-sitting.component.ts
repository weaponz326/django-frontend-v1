import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { SittingsApiService } from 'projects/restaurant/src/app/services/modules/sittings-api/sittings-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component';


@Component({
  selector: 'app-select-sitting',
  templateUrl: './select-sitting.component.html',
  styleUrls: ['./select-sitting.component.scss']
})
export class SelectSittingComponent implements OnInit {

  constructor(private sittingsApi: SittingsApiService) { }

  @Output() rowSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  getSittings(){
    this.sittingsApi.getSittings()
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

  selectRow(event: any){
    this.rowSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getSittings(),
        dataFields:[
          'id: string',
          'sitting_code: string',
          'sitting_date: string',
          'customer_name: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Sitting ID", dataField: "sitting_code", width: "30%" },
      { label: "Sitting Date", dataField: "sitting_date", width: "30%" },
      { label: "Customer Name", dataField: "customer_name", width: "40%" },
    ]
  }

}
