import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-stock-items',
  templateUrl: './all-stock-items.component.html',
  styleUrls: ['./all-stock-items.component.scss']
})
export class AllStockItemsComponent implements OnInit {

  constructor(private kitchenStockApi: KitchenStockApiService) { }

  @ViewChild('addItemButtonReference', { read: ButtonComponent, static: false }) addItemButton!: ButtonComponent;
  @ViewChild('kitchenStockGridReference', { read: GridComponent, static: false }) kitchenStockGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/home/kitchenStock/all-stock-items" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getItems(){
    this.kitchenStockApi.getItems()
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
          'quantity: string',
        ]
      }
    );

    this.editing = {
      enabled: true,
      action: 'click',
      addDialog: {
        enabled: true
      },
      addNewRow: {
        visible: true,
        position: 'near'
      }
    }

    this.columns = <GridColumn[]>[
      { label: "Item ID", dataField: "item_code", width: "20%" },
      { label: "Item Name", dataField: "item_name", width: "60%" },
      { label: "Quantity", dataField: "quantity", width: "20%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
