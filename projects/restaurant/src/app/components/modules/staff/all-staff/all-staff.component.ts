import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss']
})
export class AllStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('newStaffButtonReference', { read: ButtonComponent, static: false }) newStaffGroupButton!: ButtonComponent;
  @ViewChild('staffGridReference', { read: GridComponent, static: false }) staffGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

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

  viewStaff(event: any){
    console.log(event.detail.row.data.id);
    sessionStorage.setItem('restaurant_staff_id', event.detail.row.data.id);

    this.router.navigateByUrl('/home/staff/view-staff');
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
          'department: string',
          'job: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Staff ID", dataField: "staff_code", width: "15%" },
      { label: "Staff Name", dataField: "staff_name", width: "37%" },
      { label: "Department", dataField: "department", width: "24%" },
      { label: "Job", dataField: "job", width: "24%" }
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
