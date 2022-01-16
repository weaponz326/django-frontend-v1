import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
    { text: "View Rink", url: "/home/portal/view-rink" },
  ];

  restaurantId = localStorage.getItem('restaurant_id');
  rink: any;

  ngOnInit(): void {
    this.getRink();
  }

  getRink(){
    this.portalApi.getSingleRink(sessionStorage.getItem('restaurant_rink_id'))
      .subscribe(
        res => {
          console.log(res);
          this.rink = res;
          sessionStorage.setItem('restaurant_rink_source_id', res.rink_source)

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
          this.connectionToast.openToast();
        }
      )
  }

}
