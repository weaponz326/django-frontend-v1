import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { InputComponent } from 'smart-webcomponents-angular/input';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { AllMenuPrintComponent } from '../../../printing/menu-print/all-menu-print/all-menu-print.component';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'
import { DeleteConfirmationComponent } from 'projects/personal/src/app/components/module-utilities/delete-confirmation/delete-confirmation.component'


@Component({
  selector: 'app-view-menu-group',
  templateUrl: './view-menu-group.component.html',
  styleUrls: ['./view-menu-group.component.scss']
})
export class ViewMenuGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
    private allMenuPrint: AllMenuPrintComponent,
  ) { }

  @ViewChild('menuGroupInputReference', { read: InputComponent, static: false }) menuGroupInput!: InputComponent;
  @ViewChild('categoryInputReference', { read: InputComponent, static: false }) categoryInput!: InputComponent;
  @ViewChild('menuItemsGridReference', { read: GridComponent, static: false }) menuItemsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;
  @ViewChild('deleteConfirmationComponentReference', { read: DeleteConfirmationComponent, static: false }) deleteConfirmation!: DeleteConfirmationComponent;

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

  ngAfterViewInit(): void {
    this.getMenuGroup();
  }

  getMenuGroup(){
    this.menuApi.getSingleMenuGroup()
      .subscribe(
        res => {
          console.log(res);
          this.menuGroupInput.value = res.menu_group;
          this.categoryInput.value = res.category;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  saveMenuGroup(){
    console.log("u are updating a menu group");

    var groupData = {
      account: localStorage.getItem('restaurant_id'),
      menu_group: this.menuGroupInput.value,
      category: this.categoryInput.value,
    }

    this.menuApi.putMenuGroup(groupData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )

    console.log(groupData);
  }

  deleteMenuGroup(){
    console.log("dude... u are gonna delete the menu group?");

    this.deleteConfirmation.window.open();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.menuApi.deleteMenuGroup()
        .subscribe(
          res => {
            console.log(res);

            this.router.navigateByUrl('/home/menu/all-menu-group');
          },
          err => {
            console.log(err);
            this.connectionPrompt.toast.open();
          }
        )
    }
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
    this.allMenuPrint.print();
  }

}
