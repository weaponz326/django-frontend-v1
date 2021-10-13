import { Component, OnInit, ViewChild } from '@angular/core';

import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrls: ['./payments-history.component.scss']
})
export class PaymentsHistoryComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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
          this.connectionPrompt.toast.open();
        }
      )
  }

}
