import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment'
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/profile/all-accounts" },
  ];

  personalData: any;
  restaurantUrl: any = [];
  schoolUrl: any = [];
  enterpriseUrl: any = [];
  associationUrl: any = [];
  hospitalUrl: any = [];
  hotelUrl: any = [];
  shopUrl: any = [];
  productionUrl: any = [];

  suiteUrls = [
    environment.restaurantUrl,
    environment.schoolUrl,
    environment.enterpriseUrl,
    environment.associationUrl,
    environment.hospitalUrl,
    environment.hotelUrl,
    environment.shopUrl,
    environment.productionUrl,
  ]

  suiteData = [
    this.restaurantUrl,
    this.schoolUrl,
    this.enterpriseUrl,
    this.associationUrl,
    this.hospitalUrl,
    this.hotelUrl,
    this.shopUrl,
    this.productionUrl,
  ]

  suiteNames = [
    'Restaurant',
    'School',
    'Enterprise',
    'Association',
    'Hospital',
    'Hotel',
    'Shop',
    'Production',
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getUser();
    this.getSuiteAccounts();
  }

  getUser(){
    this.settingsApi.getUser()
      .subscribe(
        res => {
          console.log(res);
          this.personalData = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  getSuiteAccounts(){
    this.suiteUrls.forEach((url, index) => {
      this.settingsApi.getUserAccounts(url)
        .subscribe(
          res => {
            console.log(res);
            this.suiteData[index] = res;
          },
          err => {
            console.log(err);
            this.connectionPrompt.toast.open();
          }
        )
    });
  }

}
