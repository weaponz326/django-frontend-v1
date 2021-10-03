import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Task Groups", url: "/home/tasks/all-task-groups", icon: "bi bi-list-ul" },
    { text: "New Task Group", url: "/home/tasks/new-task-group", icon: "bi bi-plus-square" },
    { text: "All Task Items", url: "/home/tasks/all-task-items", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
