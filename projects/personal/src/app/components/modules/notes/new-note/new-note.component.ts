import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Note", url: "/home/notes/new-note" },
  ];

  subject = "";
  body = "";
  
  modules: any;
  styles: any;

  ngOnInit(): void {
    this.initModules();
    this.initStyles();
  }  

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subject,
      body: this.body
    }

    console.log(noteData);

    this.notesApi.postNote(noteData)
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('personal_note_id', res.id);
          this.router.navigateByUrl('/home/notes/view-note');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  initModules(){
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-tooolbar': true,
    }
  }

  initStyles(){
    this.modules = {
      height: '250px',
    }
  }

}
