import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { InputComponent } from 'smart-webcomponents-angular/input';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-view-menu-group',
  templateUrl: './view-menu-group.component.html',
  styleUrls: ['./view-menu-group.component.scss']
})
export class ViewMenuGroupComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('menuGroupInputReference', { read: InputComponent, static: false }) menuGroupInput!: InputComponent;
  @ViewChild('categoryInputReference', { read: InputComponent, static: false }) categoryInput!: InputComponent;
  @ViewChild('menuItemsGridReference', { read: GridComponent, static: false }) menuItemsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
    { text: "View Menu Group", url: "/home/menu/view-menu-group" },
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
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Item ID", dataField: "item_code", width: "25%" },
      { label: "Item Name", dataField: "item_name", width: "50%" },
      { label: "Price", dataField: "price", width: "25%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
