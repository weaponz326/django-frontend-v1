import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "Timeline", url: "/home/portal/timeline", icon: "bi bi-clock" },
    { text: "New Rink", url: "/home/portal/search", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}
