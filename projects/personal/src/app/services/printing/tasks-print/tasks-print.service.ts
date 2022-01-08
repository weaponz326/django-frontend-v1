import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Injectable({
  providedIn: 'root'
})
export class TasksPrintService {

  constructor(private pdfPrint: PdfPrintService) { }

  // all task groups

  printAllTaskGroups(gridData: any){
    let mappedData = gridData.map(function(obj: any){
      return {
        task_group: obj.task_group,
        created_at: new Date(obj.created_at).toISOString().slice(0, 16),
      }
    });

    var body = [['Task Group', 'Created At']];

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
          widths: ['65%', '35%',],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all task items

  printAllTaskItems(gridData: any){
    let mappedData = gridData.map(function(obj: any){
      return {
        task_item: obj.task_item,
        priority: obj.priority,
        start_date: new Date(obj.start_date).toISOString().slice(0, 16),
        end_date: new Date(obj.end_date).toISOString().slice(0, 16),
        status: obj.status,
      }
    });

    var body = [['Task Item', 'Priority', 'Start Date', 'End Date', 'Status']];

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
          widths: ['36%', '14%', '18%', '18%', '14%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
