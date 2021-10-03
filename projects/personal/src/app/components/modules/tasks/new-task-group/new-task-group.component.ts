import { Component, OnInit, ViewChild } from '@angular/core';

import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-new-task-group',
  templateUrl: './new-task-group.component.html',
  styleUrls: ['./new-task-group.component.scss']
})
export class NewTaskGroupComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('tasksKanbanReference', { read: KanbanComponent, static: false }) tasksKanban!: KanbanComponent;
  @ViewChild('taskGroupInputReference', { read: InputComponent, static: false }) taskGroupInput!: InputComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "New Task Group", url: "/home/tasks/new-task-group" },
  ];

  addNewButton = true;
  collapsible = true;
  dataSource = [];
  editable = true;
  taskActions = true;
  taskDue = true;
  taskProgress = true;
  columns: any[] = [];

  ngOnInit(): void {
    this.initKanban();
  }

  initKanban(){
    this.columns = [
      { label: 'To do', dataField: 'toDo' },
      { label: 'In progress', dataField: 'inProgress' },
      { label: 'Done', dataField: 'done', addNewButton: false }
    ];
  }

}
