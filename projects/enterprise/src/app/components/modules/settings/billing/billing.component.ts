import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;

  navHeading: any[] = [
    { text: "Billing", url: "/home/settings/billing" },
  ];

  selectedSubscription = '';
  selectedPlan = '';

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription(){
  }

  saveSubscription(){
  }

  setSubscription(subscription: any){
    this.selectedSubscription = subscription;
    console.log(this.selectedSubscription);
  }

  setPlan(plan: any){
    this.selectedPlan = plan;
    console.log(this.selectedPlan);
  }

}
