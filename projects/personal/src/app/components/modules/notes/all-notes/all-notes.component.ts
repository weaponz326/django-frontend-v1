import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { NotesPrintService } from 'projects/personal/src/app/services/printing/notes-print/notes-print.service';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
    private notesPrint: NotesPrintService
  ) { }

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
  ];

  notesGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesApi.getNotes()
      .subscribe(
        res => {
          console.log(res);
          this.notesGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewNote(id: any){
    console.log(id);
    sessionStorage.setItem('personal_note_id', id);

    this.router.navigateByUrl('/home/notes/view-note')
  }

  onPrint(){
    console.log("lets start printing...");
    this.notesPrint.printAllNotes(this.notesGridData);
  }

}
