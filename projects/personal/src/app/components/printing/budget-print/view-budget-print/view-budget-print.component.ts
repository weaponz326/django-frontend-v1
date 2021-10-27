import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-view-budget-print',
  templateUrl: './view-budget-print.component.html',
  styleUrls: ['./view-budget-print.component.scss']
})
export class ViewBudgetPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() budgetFormData: any = {};
  @Input() incomeGridData: any[] = [];
  @Input() expenditureGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }


}
