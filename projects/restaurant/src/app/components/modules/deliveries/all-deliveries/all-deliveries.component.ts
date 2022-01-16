import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.scss']
})
export class AllDeliveriesComponent implements OnInit {

  constructor(
    private router: Router,
    private deliveriesApi: DeliveriesApiService
  ) { }

  @ViewChild('newDeliveryButtonReference', { read: ButtonComponent, static: false }) newDeliveryButton!: ButtonComponent;
  @ViewChild('deliveriesGridReference', { read: GridComponent, static: false }) deliveriesGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Deliveries", url: "/home/deliveries/all-deliveries" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getDeliveries(){
    this.deliveriesApi.getDeliveries()
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

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getDeliveries(),
        dataFields:[
          'id: string',
          'delivery_code: string',
          'customer_name: string',
          'delivery_date: string',
          'delivery_status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Delivery ID", dataField: "delivery_code", width: "20%" },
      { label: "Customer Name", dataField: "customer_name", width: "40%" },
      { label: "Delivery Date", dataField: "delivery_date", width: "20%" },
      { label: "Delivery Status", dataField: "delivery_status", width: "20%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
