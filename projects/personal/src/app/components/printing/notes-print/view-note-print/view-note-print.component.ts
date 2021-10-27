import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-view-note-print',
  templateUrl: './view-note-print.component.html',
  styleUrls: ['./view-note-print.component.scss']
})
export class ViewNotePrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() noteViewData: any = {};

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
