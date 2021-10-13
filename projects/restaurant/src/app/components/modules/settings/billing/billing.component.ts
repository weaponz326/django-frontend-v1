import { Component, OnInit, ViewChild } from '@angular/core';

import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('subscriptionDropDownListReference', { read: DropDownListComponent, static: false }) subscriptionDropDownList!: DropDownListComponent;
  @ViewChild('frequencyDropDownListReference', { read: DropDownListComponent, static: false }) frequencyDropDownList!: DropDownListComponent;
  @ViewChild('usersNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) usersNumericTextBox!: NumericTextBoxComponent;
  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Billing", url: "/home/settings/billing" },
  ];

  selectedSubscription = '';
  selectedFrequency = '';
  usersTextBoxIncrement = 1;

  subscriptionSource = ["Individual", "Small Team", "Large Team", "Comprehensive", ""];
  frequencySource = ["Monthly", "Yearly", ""];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSubscription();
  }

  getSubscription(){
    this.settingsApi.getSubscription()
      .subscribe(
        res => {
          console.log(res);
          this.subscriptionDropDownList.value = res.subscription_type;
          this.frequencyDropDownList.value = res.billing_frequency;
          this.usersNumericTextBox.value = res.number_users;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  saveSubscription(){
    let data = {
      subscription_type: this.subscriptionDropDownList.value,
      billing_frequency: this.frequencyDropDownList.value,
      number_users: this.usersNumericTextBox.value,
    }

    this.settingsApi.putSubscription(data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  setSubscription(event: any){
    this.selectedSubscription = event.detail.value;
    console.log(this.selectedSubscription);

    if (this.selectedSubscription == "Individual"){
      this.frequencyDropDownList.value = "";
      this.frequencyDropDownList.disabled = true;
      this.usersNumericTextBox.value = 1;
      this.usersNumericTextBox.disabled = true;
    }
    else if (this.selectedSubscription == "Small Team"){
      this.usersTextBoxIncrement = 10;
      this.frequencyDropDownList.disabled = false;
      this.usersNumericTextBox.value = 10;
      this.usersNumericTextBox.disabled = false;
    }
    else if (this.selectedSubscription == "Large Team"){
      this.usersTextBoxIncrement = 50;
      this.frequencyDropDownList.disabled = false;
      this.usersNumericTextBox.value = 50;
      this.usersNumericTextBox.disabled = false;
    }
    else if (this.selectedSubscription == "Comprehensive"){
      this.frequencyDropDownList.value = "";
      this.frequencyDropDownList.disabled = true;
      this.usersNumericTextBox.value = 0;
      this.usersNumericTextBox.disabled = true;
    }
  }

  setFrequency(event: any){
    this.selectedFrequency = event.detail.value;
    console.log(this.selectedFrequency);
  }

}
