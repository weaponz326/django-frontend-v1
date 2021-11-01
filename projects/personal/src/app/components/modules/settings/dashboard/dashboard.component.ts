import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { environment } from 'projects/personal/src/environments/environment'
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/portal/dashboard" },
  ];

  allAccounts = 1;
  accountsData = [1, 0, 0, 0, 0, 0, 0, 0, 0];

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

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSuiteAccounts();
  }

  getSuiteAccounts(){
    this.suiteUrls.forEach((url, index) => {
      this.settingsApi.getUserAccounts(url)
        .subscribe(
          res => {
            console.log(res);

            this.accountsData[index + 1] = res.length;
            this.allAccounts = this.allAccounts + res.length;
            console.log(this.allAccounts);
          },
          err => {
            console.log(err);
            this.connectionPrompt.toast.open();
          }
        )
    });
  }

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        min: 0,
        ticks: {
          stepSize: 1
        }
      }]
    }
  };

  accountsBarChartData: ChartDataSets[] = [
    { data: this.accountsData, label: 'Accounts' },
  ];

  accountsBarChartLabels: Label[] = [
    'Personal',
    'Restaurant',
    'School',
    'Enterprise',
    'Association',
    'Hospital',
    'Hotel',
    'Shop',
    'Restaurant',
  ];


}
