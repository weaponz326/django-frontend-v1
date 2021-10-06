import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.scss']
})
export class AllMenuItemsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('menuItemsGridReference', { read: GridComponent, static: false }) menuItemsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Menu Items", url: "/home/menu/all-menu-items" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getMenuItems(){
    this.menuApi.getMenuItems()
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
  }

}
