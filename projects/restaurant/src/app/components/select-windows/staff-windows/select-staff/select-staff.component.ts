import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-staff',
  templateUrl: './select-staff.component.html',
  styleUrls: ['./select-staff.component.scss']
})
export class SelectStaffComponent implements OnInit {

  constructor(private staffApi: StaffApiService) { }

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

  getStaff(){
    this.staffApi.getStaff()
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
        dataSource: this.getStaff(),
        dataFields:[
          'id: string',
          'staff_code: string',
          'staff_name: string',
          'job: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Staff ID", dataField: "staff_code", width: "25%" },
      { label: "Staff Name", dataField: "staff_name", width: "40%" },
      { label: "Job", dataField: "job", width: "35%" }
    ]
  }

}
