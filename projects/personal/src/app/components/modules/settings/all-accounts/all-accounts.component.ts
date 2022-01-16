import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment'
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/profile/all-accounts" },
  ];

  personalData: any;
  restaurantData: any = [];
  schoolData: any = [];
  enterpriseData: any = [];
  associationData: any = [];
  hospitalData: any = [];
  hotelData: any = [];
  shopData: any = [];
  productionData: any = [];

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
    this.restaurantData,
    this.schoolData,
    this.enterpriseData,
    this.associationData,
    this.hospitalData,
    this.hotelData,
    this.shopData,
    this.productionData,
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
          this.connectionToast.openToast();
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
            this.connectionToast.openToast();
          }
        )
    });

    this.suiteData.forEach((suite) => console.log(suite));
  }

}
