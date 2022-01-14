import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.scss']
})
export class NewCalendarComponent implements OnInit {

  constructor(
    private router: Router,
    private calendarApi: CalendarApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  calendarForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initClendarForm();
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  initClendarForm(){
    this.calendarForm = new FormGroup({
      calendarName: new FormControl('')
    })
  }

  postCalendar(){
    let data = {
      user: localStorage.getItem('personal_id'),
      calendar_name: this.calendarForm.controls.calendarName.value
    }

    console.log(data);

    this.calendarApi.postCalendar(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_calendar_id', res.id);
            this.router.navigateByUrl('/home/calendar/view-calendar');
          }
        },
        err => {
          this.connectionToast.openToast();
          console.log(err);
        }
      )
  }

}
