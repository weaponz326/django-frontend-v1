import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-menu-groups-print',
  templateUrl: './all-menu-groups-print.component.html',
  styleUrls: ['./all-menu-groups-print.component.scss']
})
export class AllMenuGroupsPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() menuGroupGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
