import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss']
})
export class AccountsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts", icon: "bi bi-list-ul" },
    { text: "All Transactions", url: "/home/accounts/all-transactions", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
