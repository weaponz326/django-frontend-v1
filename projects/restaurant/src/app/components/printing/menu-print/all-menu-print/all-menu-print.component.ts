import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import htmlToPdfmake from 'html-to-pdfmake';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';

export default 'html-to-pdfmake';


@Component({
  selector: 'app-all-menu-print',
  templateUrl: './all-menu-print.component.html',
  styleUrls: ['./all-menu-print.component.scss']
})
export class AllMenuPrintComponent implements OnInit {

  constructor(
    private meneApi: MenuApiService,
    private pdfPrint: PdfPrintService
  ) { }

  @ViewChild('printDivElement', { read: ElementRef, static: false }) printDiv!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("component injection works...");
    const element = this.printDiv.nativeElement;
    var html = htmlToPdfmake(element.innerHTML);

    this.pdfPrint.printPdf(html);
  }

}
