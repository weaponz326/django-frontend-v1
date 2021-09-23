import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from 'projects/hospital/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-view-rink',
  templateUrl: './view-rink.component.html',
  styleUrls: ['./view-rink.component.scss']
})
export class ViewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
    { text: "View Rink", url: "/home/portal/view-rink" },
  ];

  hospitalId = localStorage.getItem('hospital_id');
  rink: any;

  ngOnInit(): void {
    this.getRink();
  }

  getRink(){
    this.portalApi.getSingleRink(sessionStorage.getItem('hospital_rink_id'))
      .subscribe(
        res => {
          console.log(res);
          this.rink = res;
          sessionStorage.setItem('hospital_rink_source_id', res.rink_source)

          // // route to show rink detail
          // if (res.rink_type == "Task"){
          //   this.router.navigateByUrl('suite/suite/view-rink/task');
          // }else if(res.rink_type == "Appointment"){
          //   this.router.navigateByUrl('suite/suite/view-rink/appointment');
          // }else if(res.rink_type == "Note"){
          //   this.router.navigateByUrl('suite/suite/view-rink/note');
          // }
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

}
