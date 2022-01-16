import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('addOrderButtonReference', { read: ButtonComponent, static: false }) addOrderButton!: ButtonComponent;
  @ViewChild('ordersGridReference', { read: GridComponent, static: false }) ordersGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getOrders(){
    this.ordersApi.getOrders()
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
        dataSource: this.getOrders(),
        dataFields:[
          'id: string',
          'order_code: string',
          'customer_name: string',
          'order_date: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Order ID", dataField: "order_code", width: "25%" },
      { label: "Customer Name", dataField: "customer_name", width: "50%" },
      { label: "Order Date", dataField: "order_date", width: "25%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
