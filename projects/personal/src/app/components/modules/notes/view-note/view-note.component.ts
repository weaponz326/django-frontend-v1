import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
    { text: "Note View", url: "/home/notes/view-note" },
  ];

  subject = "";
  body = "";

  modules: any;
  styles: any;

  ngOnInit(): void {
    this.initModules();
    this.initStyles();
  }

  ngAfterViewInit(): void {
    this.getNote();
  }

  getNote(){
    this.notesApi.getNote()
      .subscribe(
        res => {
          console.log(res);
          this.subject = res.subject;
          this.body = res.body;

        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.subject,
      body: this.body
    }

    console.log(noteData);

    this.notesApi.putNote(noteData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteNote(){
    this.notesApi.deleteNote()
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.removeItem('personal_note_id');
          this.router.navigateByUrl('/home/notes/all-notes');
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

  confirmDelete(){
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
