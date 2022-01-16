import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('itemsGridReference', { read: GridComponent, static: false }) itemsGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getItems(){
    this.ordersApi.getItems()
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
        dataSource: this.getItems(),
        dataFields:[
          'id: string',
          'item_code: string',
          'item_name: string',
          'price: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Menu Item", dataField: "menu_item", width: "45%" },
      { label: 'Price', dataField: 'price', width: "20%" },
      { label: 'Quantity', dataField: 'quantity', width: "15%" },
      { label: "Total Price", dataField: "total_price", width: "20%" }
    ]
  }

}
