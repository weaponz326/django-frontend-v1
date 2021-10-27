import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-view-account-print',
  templateUrl: './view-account-print.component.html',
  styleUrls: ['./view-account-print.component.scss']
})
export class ViewAccountPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() accountFormData: any = {};
  @Input() transactionsGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }


}
