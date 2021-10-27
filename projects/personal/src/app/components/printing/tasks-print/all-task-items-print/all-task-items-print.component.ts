import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-task-items-print',
  templateUrl: './all-task-items-print.component.html',
  styleUrls: ['./all-task-items-print.component.scss']
})
export class AllTaskItemsPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() taskItemsGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
