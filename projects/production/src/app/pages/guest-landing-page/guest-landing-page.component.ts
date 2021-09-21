import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterApiService } from '../../services/register-api/register-api.service';


@Component({
  selector: 'app-guest-landing-page',
  templateUrl: './guest-landing-page.component.html',
  styleUrls: ['./guest-landing-page.component.scss']
})
export class GuestLandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private registerApi: RegisterApiService
  ) { }

  ngOnInit(): void {
    this.checkUserAccount();
  }

  checkUserAccount(){
    // redirect if user has an account
    this.registerApi.hasAccount()
      .subscribe(
        res => {
          console.log(res);
          if (res.has_account == true){
            this.router.navigateByUrl("/user");
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
