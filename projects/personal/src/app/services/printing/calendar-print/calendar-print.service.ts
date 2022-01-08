import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Injectable({
  providedIn: 'root'
})
export class CalendarPrintService {

  constructor(private pdfPrint: PdfPrintService) { }

  // all calendars

  printAllCalendars(gridData: any){
    let mappedData = gridData.map(function(obj: any){
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

  printAllSchedules(gridData: any){
    let mappedData = gridData.map(function(obj: any){
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
