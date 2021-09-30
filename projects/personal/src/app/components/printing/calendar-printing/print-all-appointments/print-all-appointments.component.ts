import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import htmlToPdfmake from 'html-to-pdfmake';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';

export default 'html-to-pdfmake';

@Component({
  selector: 'app-print-all-appointments',
  templateUrl: './print-all-appointments.component.html',
  styleUrls: ['./print-all-appointments.component.scss']
})
export class PrintAllAppointmentsComponent implements OnInit {

  constructor(
    private calendarApi: CalendarApiService,
    private pdfPrint: PdfPrintService
  ) { }

  @ViewChild('appointmentsGridReference', { read: GridComponent, static: false }) appointmentsGrid!: GridComponent;
  @ViewChild('printDivElement', { read: ElementRef, static: false }) printDiv!: ElementRef;

  gridHtml: any;

  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  print(){
    this.gridHtml = this.appointmentsGrid.exportData('html');

    const element = this.printDiv.nativeElement;
    var html = htmlToPdfmake(element.innerHTML);

    this.pdfPrint.printPdf(html);
  }

  getAppointments(){
    this.calendarApi.getAppointments()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: this.getAppointments(),
        dataFields:[
          'id: string',
          'label: string',
          'dateStart: string',
          'dateEnd: string',
          'status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Appointment', dataField: 'label', width: '40%' },
      { label: 'Start Date', dataField: 'dateStart', width: '22%' },
      { label: 'End Date', dataField: 'dateEnd', width: '22%' },
      { label: 'Status', dataField: 'status', columnGroup: 'order', width: '16%' },
    ]
  }

}
