import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers", icon: "bi bi-list-ul" },
    { text: "New Customer", url: "/home/customers/new-customer", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}
