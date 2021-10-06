import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}
