import { Component, OnInit, ViewChild } from '@angular/core';

import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.scss']
})
export class KanbanViewComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('tasksKanbanReference', { read: KanbanComponent, static: false }) tasksKanban!: KanbanComponent;
  @ViewChild('taskGroupInputReference', { read: InputComponent, static: false }) taskGroupInput!: InputComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Kanban View", url: "/home/tasks/kanban-view" },
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
