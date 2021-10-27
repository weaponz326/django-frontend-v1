import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Component({
  selector: 'app-all-notes-print',
  templateUrl: './all-notes-print.component.html',
  styleUrls: ['./all-notes-print.component.scss']
})
export class AllNotesPrintComponent implements OnInit {

  constructor(private pdfPrint: PdfPrintService) { }

  @Input() notesGridData: any[] = [];

  @ViewChild('printElementReference', { read: ElementRef, static: false }) printElement!: ElementRef;

  ngOnInit(): void {
  }

  print(){
    console.log("lets start printing...");

    const html = this.printElement.nativeElement.innerHTML;
    this.pdfPrint.generatePdf(html);
  }

}
