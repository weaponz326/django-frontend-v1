import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-schedule',
  templateUrl: './select-schedule.component.html',
  styleUrls: ['./select-schedule.component.scss']
})
export class SelectScheduleComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @Output() scheduleSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  scheduleGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getSchedules();
    this.openButton.nativeElement.click();
  }

  getSchedules(){
    this.calendarApi.getAllSchedules(1, 15, "")
      .subscribe(
        res => {
          console.log(res);
          this.scheduleGridData = res.results;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.scheduleSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
