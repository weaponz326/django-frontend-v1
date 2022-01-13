import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  noteData: any;
  attachmentsData: any[] = [];

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;
    sessionStorage.setItem("personal_note_id", source_id);

    this.getNote();
    this.getAttachments();
  }

  getNote(){
    this.notesApi.getNote()
      .subscribe(
        res => {
          console.log(res);
          this.noteData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getAttachments(){
    this.notesApi.getFiles()
      .subscribe(
        res => {
          console.log(res);
          this.attachmentsData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
