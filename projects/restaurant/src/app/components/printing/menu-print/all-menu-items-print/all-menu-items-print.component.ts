import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-menu-items-print',
  templateUrl: './all-menu-items-print.component.html',
  styleUrls: ['./all-menu-items-print.component.scss']
})
export class AllMenuItemsPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() menuItemGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
