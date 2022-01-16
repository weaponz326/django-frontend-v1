import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-menu-item',
  templateUrl: './select-menu-item.component.html',
  styleUrls: ['./select-menu-item.component.scss']
})
export class SelectMenuItemComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @Output() rowSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

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
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(event: any){
    this.rowSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
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

}
