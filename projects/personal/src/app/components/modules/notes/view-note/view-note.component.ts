import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


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

  @ViewChild('subjectInputReference', { read: InputComponent, static: false }) subjectInput!: InputComponent;
  @ViewChild('bodyEditorReference', { read: EditorComponent, static: false }) bodyEditor!: EditorComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Note View", url: "/home/notes/view-note" },
  ];

  fileNames: any;
  filesToUpload: File[] = [];

  toolbarItems: any[] = [];

  ngOnInit(): void {
    this.initEditor();
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
          this.subjectInput.value = res.subject;
          this.bodyEditor.value = res.body;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
        }
      )
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subjectInput.value,
      body: this.bodyEditor.value
    }

    console.log(noteData);

    this.notesApi.putNote(noteData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
        }
      )
  }

  downloadFile(fileId: any, index: any){

  }

  formatFileName(name: any){
    return name.replace('/notes/', '');
  }

  initEditor(){
    this.toolbarItems = [
      'Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'hyperlink', 'table', 'Image', '|',
      'ClearFormat', 'Print',
      'SourceCode', 'splitmode', 'FullScreen', '|',
      'Undo', 'Redo', 'subscript', 'superscript', 'delete'
    ];
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
