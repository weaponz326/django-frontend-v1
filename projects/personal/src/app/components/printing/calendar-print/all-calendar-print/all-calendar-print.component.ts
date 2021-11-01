import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-calendar-print',
  templateUrl: './all-calendar-print.component.html',
  styleUrls: ['./all-calendar-print.component.scss']
})
export class AllCalendarPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() calendarGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}