import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApiService } from '../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-guest-landing-page',
  templateUrl: './guest-landing-page.component.html',
  styleUrls: ['./guest-landing-page.component.scss']
})
export class GuestLandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.authApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          // go to suite page if user is logged in
          if (res.id){
            this.router.navigateByUrl("/home");
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  gotoAbout() {
    console.log('to about...');
    document.querySelector('#aboutComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoPricing() {
    console.log('to pricing...');
    document.querySelector('#pricingComponentReference')?.scrollIntoView({ behavior: 'smooth'});
  }

  gotoContact() {
    console.log('to contact...');
    document.querySelector('#contactComponentReference')?.scrollIntoView({ behavior: 'smooth'});
  }

}
