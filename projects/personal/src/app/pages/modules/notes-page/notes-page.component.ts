import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "New Note", url: "/home/notes/new-note", icon: "bi bi-plus-square" },
    { text: "All Notes", url: "/home/notes/all-notes", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
