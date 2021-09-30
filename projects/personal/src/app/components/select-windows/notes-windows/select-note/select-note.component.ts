import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component';


@Component({
  selector: 'app-select-note',
  templateUrl: './select-note.component.html',
  styleUrls: ['./select-note.component.scss']
})
export class SelectNoteComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @Output() noteSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  getNotes(){
    this.notesApi.getNotes()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  selectRow(event: any){
    this.noteSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
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

}
