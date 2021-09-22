import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterApiService } from '../../services/register-api/register-api.service';


@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private registerApi: RegisterApiService
  ) { }

  accounts: any;

  ngOnInit(): void {
    this.getUserAccounts();
  }

  getUserAccounts(){
    this.registerApi.getUserAccounts()
    .subscribe(
      res => {
        console.log(res);
        this.accounts = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  activateAccount(accountId: any){
    console.log(accountId);

    this.registerApi.postSelectedAccount(accountId)
      .subscribe(
        res => {
          console.log(res);

          localStorage.setItem('shop_id', res.shop_id);
          this.router.navigateByUrl('/home');
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
