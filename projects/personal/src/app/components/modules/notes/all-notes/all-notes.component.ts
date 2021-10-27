import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { AllNotesPrintComponent } from 'projects/personal/src/app/components/printing/notes-print/all-notes-print/all-notes-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
  ) { }

  @ViewChild('notesGridReference', { read: GridComponent, static: false }) subjectInput!: GridComponent;

  @ViewChild('allNotesPrintComponentReference', { read: AllNotesPrintComponent, static: false }) allNotesPrint!: AllNotesPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  notesGridData = [];

  ngOnInit(): void {
    this.initGrid();
  }

  getNotes(){
    this.notesApi.getNotes()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          this.notesGridData = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  viewNote(event: any){
    console.log(event.detail.row.data.id);
    sessionStorage.setItem('personal_note_id', event.detail.row.data.id);

    this.router.navigateByUrl('/home/notes/view-note')
  }


  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: this.getNotes(),
        dataFields:[
          'id: string',
          'label: subject',
          'dateStart: created_at',
          'dateEnd: updated_at',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Subject', dataField: 'subject', width: '50%' },
      { label: 'Date Created', dataField: 'created_at', width: '25%' },
      { label: 'Last Updated', dataField: 'updated_at', width: '25%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
    this.allNotesPrint.print();
  }

}
