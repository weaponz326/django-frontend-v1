import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
