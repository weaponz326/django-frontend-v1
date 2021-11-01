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

  notesLineChartData: ChartDataSets[] = [{ data: [0], label: 'Notes' }];
  notesLineChartLabels: Label[] = [""]

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
    this.notesApi.getAnnotation("Note")
      .subscribe(
        res => {
          console.log(res);
          this.setNoteChartData(res);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  setNoteChartData(data: any){
    this.notesLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.notesLineChartLabels.push(data[x].date);
    }
    console.log(this.notesLineChartLabels);

    let rawData = [];
    for(let x = 0; x < data.length; x++){
      rawData.push(data[x].count);
    }
    console.log(rawData);
    this.notesLineChartData = [{ data: rawData, label: 'Notes' }];
  }

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        beginAtZero: true,
        min: 0,
        ticks: {
          stepSize: 1
        }
      }]
    }
  };

}
