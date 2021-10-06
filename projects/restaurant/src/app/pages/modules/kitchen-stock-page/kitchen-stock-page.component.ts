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
    { text: "New Item", url: "/home/kitchen-stock/add-stock-item", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}
