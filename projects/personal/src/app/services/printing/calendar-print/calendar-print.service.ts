import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';


@Injectable({
  providedIn: 'root'
})
export class CalendarPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private calendarApi: CalendarApiService,
  ) { }

  calendarGridData: any[] = [];
  schedulesGridData: any[] = [];

  // all calendars

  getPrintCalendars(count: any){
    this.calendarApi.getCalendars(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.calendarGridData = res.results;
          this.printAllCalendars();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllCalendars(){
    let mappedData = this.calendarGridData.map(function(obj: any){
      return {
        calendar_name: obj.calendar_name,
        created_at: new Date(obj.created_at).toISOString().slice(0, 16),
      }
    });

    var body = [['Calendar Name', 'Created At']];

    mappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      body.push(row);
    })

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['65%', '35%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all schedules

  getPrintSchedules(count: any){
    this.calendarApi.getAllSchedules(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.schedulesGridData = res.results;
          this.printAllSchedules();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllSchedules(){
    let mappedData = this.schedulesGridData.map(function(obj: any){
      return {
        schedule_name: obj.schedule_name,
        start_date: new Date(obj.start_date).toISOString().slice(0, 16),
        end_date: new Date(obj.end_date).toISOString().slice(0, 16),
        status: obj.status,
      }
    });

    var body = [['Schedule Name', 'Start Date', 'End Date', 'Status']];

    mappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      body.push(row);
    })

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['35%', '23%', '23%', '19%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
