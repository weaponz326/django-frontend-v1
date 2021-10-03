import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-task-items',
  templateUrl: './all-task-items.component.html',
  styleUrls: ['./all-task-items.component.scss']
})
export class AllTaskItemsComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('taskItemsGridReference', { read: GridComponent, static: false }) subjectInput!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Task Items", url: "/home/tasks/all-task-items" },
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
          'label: task_item',
          'dateStart: priority',
          'dateStart: start_date',
          'dateEnd: end_date',
          'dateEnd: status',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Task Item', dataField: 'task_item', width: '36%' },
      { label: 'Priority', dataField: 'priority', width: '14%' },
      { label: 'Start Date', dataField: 'start_date', width: '18%' },
      { label: 'End Date', dataField: 'end_date', width: '18%' },
      { label: 'Status', dataField: 'status', width: '14%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
