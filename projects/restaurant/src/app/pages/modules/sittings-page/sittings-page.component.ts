import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sittings-page',
  templateUrl: './sittings-page.component.html',
  styleUrls: ['./sittings-page.component.scss']
})
export class SittingsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sittings", url: "/home/sittings/all-sittings", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}
