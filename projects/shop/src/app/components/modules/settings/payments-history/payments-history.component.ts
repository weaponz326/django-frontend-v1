import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrls: ['./payments-history.component.scss']
})
export class PaymentsHistoryComponent implements OnInit {

  constructor() { }

  navHeading: any[] = [
    { text: "Billing", url: "/home/settings/billing" },
    { text: "Payments History", url: "/home/settings/payments-history" },
  ];

  ngOnInit(): void {
  }

}
