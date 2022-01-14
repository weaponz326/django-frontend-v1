import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-calendar',
  templateUrl: './select-calendar.component.html',
  styleUrls: ['./select-calendar.component.scss']
})
export class SelectCalendarComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @Output() calendarSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  calendarGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getCalendars();
    this.openButton.nativeElement.click();
  }

  getCalendars(){
    this.calendarApi.getCalendars(1, 15, "")
      .subscribe(
        res => {
          console.log(res);
          this.calendarGridData = res.results;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.calendarSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
