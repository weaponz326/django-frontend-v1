import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { AllMenuItemsPrintComponent } from 'projects/restaurant/src/app/components/printing/menu-print/all-menu-items-print/all-menu-items-print.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.scss']
})
export class AllMenuItemsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('menuItemsGridReference', { read: GridComponent, static: false }) menuItemsGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('allMenuItemsPrintComponentReference', { read: AllMenuItemsPrintComponent, static: false }) allMenuItemsPrint!: AllMenuItemsPrintComponent;

  navHeading: any[] = [
    { text: "All Menu Items", url: "/home/menu/all-menu-items" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  menuItemGridData = [];

  ngOnInit(): void {
    this.initGrid();
  }

  getMenuItems(){
    this.menuApi.getMenuItems()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          this.menuItemGridData = res;
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
        dataSource: this.getMenuItems(),
        dataFields:[
          'id: string',
          'item_code: string',
          'item_name: string',
          'price: string',
          'category: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Item ID", dataField: "item_code", width: "20%" },
      { label: "Item Name", dataField: "item_name", width: "45%" },
      { label: "Price", dataField: "price", width: "15%" },
      { label: "Category", dataField: "category", width: "20%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
    this.allMenuItemsPrint.print();
  }

}
