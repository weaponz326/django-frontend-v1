import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService
  ) { }

  navHeading: any[] = [
    { text: "New Note", url: "/home/notes/new-note" },
  ];

  subject = "";

  isFileSave: boolean = false;
  filesToUpload: File[] = [];

  ngOnInit(): void {
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subject,
      // body: this.bodyEditor.value
    }

    console.log(noteData);

    this.notesApi.postNote(noteData)
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('personal_note_id', res.id);
          if(!this.isFileSave){
            this.router.navigateByUrl('/home/notes/view-note');
          }
          else{
            this.sendFile(this.filesToUpload[0]);
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  sendFile(file: any){
    let formData = new FormData();
    formData.append("note", String(sessionStorage.getItem('personal_note_id')));
    formData.append("file", file);

    this.notesApi.postFile(formData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/home/notes/view-note');
        },
        err => {
          console.log(err);
        }
      )
  }

  onFileSelected(e: any){
    this.filesToUpload = [];
    this.filesToUpload = e.target.files;
    console.log(this.filesToUpload);

    this.setFileSave();
  }

  setFileSave(){
    this.isFileSave = true;
    this.saveNote();
  }

}
