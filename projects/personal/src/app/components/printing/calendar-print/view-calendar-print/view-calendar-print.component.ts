import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';

@Component({
  selector: 'app-view-calendar-print',
  templateUrl: './view-calendar-print.component.html',
  styleUrls: ['./view-calendar-print.component.scss']
})
export class ViewCalendarPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() schedulesGridData: any[] = [];
  @Input() calendarFormData: any = {};

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }
}
