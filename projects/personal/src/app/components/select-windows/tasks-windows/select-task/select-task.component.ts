import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component';


@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @Output() taskSelected = new EventEmitter<object>();

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

  getTasks(){
    this.tasksApi.getTasks()
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
    this.taskSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: this.getTasks(),
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
