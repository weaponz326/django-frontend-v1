import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Injectable({
  providedIn: 'root'
})
export class NotesPrintService {

  constructor(private pdfPrint: PdfPrintService) { }

  // all notes

  printAllNotes(gridData: any){
    let mappedData = gridData.map(function(obj: any){
      return {
        subject: obj.subject,
        created_at: new Date(obj.created_at).toISOString().slice(0, 16),
        updated_at: new Date(obj.updated_at).toISOString().slice(0, 16),
      }
    });

    var body = [['Subject', 'Created At', 'Last Updated']];

    mappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      body.push(row);
    })

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['50%', '25%', '25%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
