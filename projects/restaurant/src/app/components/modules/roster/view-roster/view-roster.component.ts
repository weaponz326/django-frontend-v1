import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { RosterSheetComponent } from '../roster-sheet/roster-sheet.component';


@Component({
  selector: 'app-view-roster',
  templateUrl: './view-roster.component.html',
  styleUrls: ['./view-roster.component.scss']
})
export class ViewRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('rosterCodeInputReference', { read: InputComponent, static: false }) rosterCodeInput!: InputComponent;
  @ViewChild('rosterNameInputReference', { read: InputComponent, static: false }) rosterNameInput!: InputComponent;
  @ViewChild('fromDateTimePickerReference', { read: DateTimePickerComponent, static: false }) fromDateTimePicker!: DateTimePickerComponent;
  @ViewChild('toDateTimePickerReference', { read: DateTimePickerComponent, static: false }) toDateTimePicker!: DateTimePickerComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('rosterSheetComponentReference', { read: RosterSheetComponent, static: false }) rosterSheet!: RosterSheetComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
    { text: "View Roster", url: "/home/roster/view-roster" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSingleRoster();
  }

  getSingleRoster(){
    this.rosterApi.getSingleRoster()
      .subscribe(
        res => {
          console.log(res);

          this.rosterCodeInput.value = res.roster_code;
          this.rosterNameInput.value = res.roster_name;
          this.fromDateTimePicker.value = res.from_date;
          this.toDateTimePicker.value = res.to_date;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveRoster(){
    let rosterData = {
      account: localStorage.getItem('restaurant_id'),
      roster_code: this.rosterCodeInput.value,
      roster_name: this.rosterNameInput.value,
      from_date: this.fromDateTimePicker.value,
      to_date: this.toDateTimePicker.value,
    }

    this.rosterApi.putRoster(rosterData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    console.log(rosterData);

    // this.rosterSheet.postSheetData();
  }

}
