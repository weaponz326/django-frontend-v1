import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-menu-groups',
  templateUrl: './all-menu-groups.component.html',
  styleUrls: ['./all-menu-groups.component.scss']
})
export class AllMenuGroupsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('newMenuGroupButtonReference', { read: ButtonComponent, static: false }) newMenuGroupButton!: ButtonComponent;
  @ViewChild('menuGroupGridReference', { read: GridComponent, static: false }) menuGroupGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getMenuGroups(){
    this.menuApi.getMenuGroups()
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
        dataSource: this.getMenuGroups(),
        dataFields:[
          'id: string',
          'menu_group: string',
          'category: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Menu Group", dataField: "menu_group", width: "60%" },
      { label: "Category", dataField: "category", width: "40%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
