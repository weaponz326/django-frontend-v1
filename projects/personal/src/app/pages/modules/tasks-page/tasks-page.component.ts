import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "Kanban View", url: "/home/tasks/kanban-view", icon: "bi bi-book" },
    { text: "Checklist View", url: "/home/tasks/checklist-view", icon: "bi bi-book" },
    { text: "All Tasks", url: "/home/tasks/all-tasks", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
