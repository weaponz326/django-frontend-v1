import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('notesGridReference', { read: GridComponent, static: false }) subjectInput!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Tasks", url: "/home/tasks/all-tasks" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: [],
        dataFields:[
          'id: string',
          'label: task_name',
          'dateStart: priority',
          'dateStart: start_date',
          'dateEnd: end_date',
          'dateEnd: status',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Task Name', dataField: 'task_name', width: '36%' },
      { label: 'Priority', dataField: 'priority', width: '14%' },
      { label: 'Start Date', dataField: 'start_date', width: '18%' },
      { label: 'End Date', dataField: 'end_date', width: '18%' },
      { label: 'Status', dataField: 'status', width: '14%' },
    ]
  }

}
