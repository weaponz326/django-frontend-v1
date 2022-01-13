import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-note',
  templateUrl: './select-note.component.html',
  styleUrls: ['./select-note.component.scss']
})
export class SelectNoteComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @Output() noteSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  notesGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getNotes();
    this.openButton.nativeElement.click();
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
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.noteSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
