import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Injectable({
  providedIn: 'root'
})
export class TasksPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private tasksApi: TasksApiService,
  ) { }

  taskGroupsGridData: any[] = [];
  taskItemsGridData: any[] = [];

  // all task groups

  getPrintTaskGroups(count: any){
    this.tasksApi.getTaskGroups(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.taskGroupsGridData = res.results;
          this.printAllTaskGroups();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllTaskGroups(){
    let mappedData = this.taskGroupsGridData.map(function(obj: any){
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

  getPrintAllTaskItems(count: any){
    this.tasksApi.getAllTaskItems(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.taskItemsGridData = res.results;
          this.printAllTaskItems();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllTaskItems(){
    let mappedData = this.taskItemsGridData.map(function(obj: any){
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
