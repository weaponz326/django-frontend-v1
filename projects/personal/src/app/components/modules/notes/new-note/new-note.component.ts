import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


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

  @ViewChild('subjectInputReference', { read: InputComponent, static: false }) subjectInput!: InputComponent;
  @ViewChild('bodyEditorReference', { read: EditorComponent, static: false }) bodyEditor!: EditorComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "New Note", url: "/home/notes/new-note" },
  ];

  isFileSave: boolean = false;
  filesToUpload: File[] = [];

  toolbarItems: any[] = [];

  ngOnInit(): void {
    this.initEditor();
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subjectInput.value,
      body: this.bodyEditor.value
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
          this.router.navigateByUrl('/home/notes/view-note');
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
    console.log(this.filesToUpload);

    this.setFileSave();
  }


  setFileSave(){
    this.isFileSave = true;
    this.saveNote();
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

}
