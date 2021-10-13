import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-stock-page',
  templateUrl: './kitchen-stock-page.component.html',
  styleUrls: ['./kitchen-stock-page.component.scss']
})
export class KitchenStockPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Items", url: "/home/kitchen-stock/all-stock-items", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}
