import { Component, OnInit, ViewChild } from '@angular/core';

import { TreeComponent } from 'smart-webcomponents-angular/tree';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-checklist-view',
  templateUrl: './checklist-view.component.html',
  styleUrls: ['./checklist-view.component.scss']
})
export class ChecklistViewComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

	@ViewChild('tasksTree', { read: TreeComponent, static: false }) tasksTree!: TreeComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Checklist View", url: "/home/tasks/checklist-view" },
  ];

  ngOnInit(): void {
  }

}
