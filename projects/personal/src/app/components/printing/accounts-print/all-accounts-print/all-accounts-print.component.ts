import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-accounts-print',
  templateUrl: './all-accounts-print.component.html',
  styleUrls: ['./all-accounts-print.component.scss']
})
export class AllAccountsPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() accountsGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
