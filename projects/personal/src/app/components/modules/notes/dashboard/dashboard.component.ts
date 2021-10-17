import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @ViewChild('connectionPromptComponentReference') connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/notes/dashboard" },
  ];

  allNotesCount: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getNotesCount();
    this.getNoteAnnotation();
  }

  getNotesCount(){
    this.notesApi.getCounts("Note")
      .subscribe(
        res => {
          console.log(res);
          this.allNotesCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  getNoteAnnotation(){
    this.notesApi.getAnnotation()
      .subscribe(
        res => {
          console.log(res);
          // this.allSchedulesCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }


}
