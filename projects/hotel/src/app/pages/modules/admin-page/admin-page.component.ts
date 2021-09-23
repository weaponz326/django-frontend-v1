import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Users", url: "/home/admin/all-users", icon: "bi bi-people" },
    { text: "Invitations", url: "/home/admin/invitations", icon: "bi bi-envelope" },
    { text: "New Invitation", url: "/home/admin/search", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}
