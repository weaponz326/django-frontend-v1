import { Component, OnInit, ViewChild } from '@angular/core';

import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-checklist-view',
  templateUrl: './checklist-view.component.html',
  styleUrls: ['./checklist-view.component.scss']
})
export class ChecklistViewComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

	@ViewChild('tasksTreeReference', { read: TreeComponent, static: false }) tasksTree!: TreeComponent;
  @ViewChild('taskGroupInputReference', { read: InputComponent, static: false }) taskGroupInput!: InputComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Checklist View", url: "/home/tasks/checklist-view" },
  ];

  ngOnInit(): void {
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
