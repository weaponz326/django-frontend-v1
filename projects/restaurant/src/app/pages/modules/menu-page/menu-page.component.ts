import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups", icon: "bi bi-list-ul" },
    { text: "All Menu Items", url: "/home/menu/all-menu-items", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
