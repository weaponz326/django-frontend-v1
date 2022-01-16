import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { AllMenuGroupsPrintComponent } from 'projects/restaurant/src/app/components/printing/menu-print/all-menu-groups-print/all-menu-groups-print.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-menu-groups',
  templateUrl: './all-menu-groups.component.html',
  styleUrls: ['./all-menu-groups.component.scss']
})
export class AllMenuGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
  ) { }

  @ViewChild('newMenuGroupButtonReference', { read: ButtonComponent, static: false }) newMenuGroupButton!: ButtonComponent;
  @ViewChild('menuGroupGridReference', { read: GridComponent, static: false }) menuGroupGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('allMenuGroupsPrintComponentReference', { read: AllMenuGroupsPrintComponent, static: false }) allMenuGroupsPrint!: AllMenuGroupsPrintComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  menuGroupGridData = [];

  ngOnInit(): void {
    this.initGrid();
  }

  // openAddDialog(){
  //   console.log("opening add dialog...")
  //   this.menuGroupGrid.beginEdit(1);
  // }

  getMenuGroups(){
    this.menuApi.getMenuGroups()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          this.menuGroupGridData = res;
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

    this.editing = {
      enabled: true,
      action: "none",
      addDialog: {
        enabled: true,
        header: "Add New Menu Group"
      },
      addNewRow: {
        visible: true,
        position: 'near',
      }
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.allMenuGroupsPrint.print();
  }

  onRowInserted = (index: any, row: any) => {
    console.log(row.data);

    let data = {
      account: localStorage.getItem('restaurant_id'),
      menu_group: row.data.menu_group,
      category: row.data.category,
    }

    // this.menuApi.postMenuGroup(data)
      // .subscribe(
      //   res => {
      //     console.log(res);
      //     sessionStorage.setItem('restaurant_menu_group_id', res.id);
      //     this.router.navigateByUrl('home/menu/view-menu-group');
      //   },
      //   err => {
      //     console.log(err);
      //     this.connectionToast.openToast();
      //   }
      // )
  }

  onRowDoubleClick(e: any){
    console.log(e);

    sessionStorage.setItem('restaurant_menu_group_id', e.detail.row.data.id);
    this.router.navigateByUrl('home/menu/view-menu-group');
  }

}
