import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService
  ) { }

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
    { text: "Note View", url: "/home/notes/view-note" },
  ];

  subject = "";

  fileNames: any;
  filesToUpload: File[] = [];

  noteViewData = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getNote();
    this.getNoteFiles();
  }

  getNote(){
    this.notesApi.getNote()
      .subscribe(
        res => {
          console.log(res);
          this.subject = res.subject;
          // this.bodyEditor.value = res.body;

          this.noteViewData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  getNoteFiles(){
    this.notesApi.getFiles()
      .subscribe(
        res => {
          console.log(res);
          this.fileNames = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subject,
      // body: this.bodyEditor.value
    }

    console.log(noteData);

    this.notesApi.putNote(noteData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteNote(){
    this.notesApi.deleteNote()
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.removeItem('personal_note_id');
          this.router.navigateByUrl('/home/notes/new-note');
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
          // TODO: pushes null into array
          this.fileNames.push(res?.data?.file);
        },
        err => {
          console.log(err);
          // this.connectionPrompt.toast.open();
        }
      )
  }

  onFileSelected(e: any){
    this.filesToUpload = [];
    this.filesToUpload = e.target.files;

    for(var i = 0; i < this.filesToUpload.length; i++){
      this.sendFile(this.filesToUpload[i]);
    }

    console.log(this.filesToUpload);
  }

  deleteFile(fileId: any, index: any){
    this.notesApi.deleteFile(fileId)
      .subscribe(
        res => {
          console.log(res);
          this.fileNames.splice(index, 1);
        },
        err => {
          console.log(err);
          // this.connectionPrompt.toast.open();
        }
      )
  }

  downloadFile(fileId: any, index: any){

  }

  formatFileName(name: any){
    return name.replace('/notes/', '');
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
