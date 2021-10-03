import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-task-groups',
  templateUrl: './all-task-groups.component.html',
  styleUrls: ['./all-task-groups.component.scss']
})
export class AllTaskGroupsComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('taskGroupsGridReference', { read: GridComponent, static: false }) taskGroupsGrid!: GridComponent;
  @ViewChild('newCalendarButtonReference', { read: ButtonComponent, static: false }) newCalendarButton!: ButtonComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars" },
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
          'task_group_name: string',
          'date_created: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Task Group', dataField: 'task_group_name', width: '65%' },
      { label: 'Date Created', dataField: 'date_created', width: '35%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
