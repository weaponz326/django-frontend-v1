import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff", icon: "bi bi-list-ul" },
    { text: "New Staff", url: "/home/staff/new-staff", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}
