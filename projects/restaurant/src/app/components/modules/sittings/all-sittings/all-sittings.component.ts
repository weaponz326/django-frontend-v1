import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { SittingsApiService } from 'projects/restaurant/src/app/services/modules/sittings-api/sittings-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-sittings',
  templateUrl: './all-sittings.component.html',
  styleUrls: ['./all-sittings.component.scss']
})
export class AllSittingsComponent implements OnInit {

  constructor(private sittingsApi: SittingsApiService) { }

  @ViewChild('newMenuSittingButtonReference', { read: ButtonComponent, static: false }) newSittingButton!: ButtonComponent;
  @ViewChild('sittingsGridReference', { read: GridComponent, static: false }) sittingsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Sittings", url: "/home/sittings/all-sittings" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

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

  onPrint(){
    console.log("lets start printing...");
  }

}
