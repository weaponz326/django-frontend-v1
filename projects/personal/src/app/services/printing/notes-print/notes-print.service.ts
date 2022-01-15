import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';


@Injectable({
  providedIn: 'root'
})
export class NotesPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private notesApi: NotesApiService,
  ) { }

  notesGridData: any[] = [];

  // all notes

  getPrintNotes(count: any){
    this.notesApi.getNotes(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.notesGridData = res.results;
          this.printAllNotes();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllNotes(){
    let mappedData = this.notesGridData.map(function(obj: any){
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
