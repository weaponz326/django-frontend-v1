import { Component, OnInit, ViewChild } from '@angular/core';

import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrls: ['./payments-history.component.scss']
})
export class PaymentsHistoryComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Billing", url: "/home/settings/billing" },
    { text: "Billing History", url: "/home/settings/payments-history" },
  ];

  historyData: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getHistory();
  }

  getHistory(){
    this.settingsApi.getHistory()
      .subscribe(
        res => {
          console.log(res);
          this.historyData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
