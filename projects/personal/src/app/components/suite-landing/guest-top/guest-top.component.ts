import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApiService } from '../../../services/auth-api/auth-api.service';


@Component({
  selector: 'app-guest-top',
  templateUrl: './guest-top.component.html',
  styleUrls: ['./guest-top.component.scss']
})
export class GuestTopComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService
  ) { }

  @Input() suiteName: string = "";
  @Input() primaryCaption: string = "";
  @Input() secondaryCaption: string = "";
  @Input() features: any;

  ngOnInit(): void {
  }

  createAccount(e: any){
    e.preventDefault();
    console.log("u are about to create an account or accounts");

    if (this.suiteName != "nR Personal"){
      sessionStorage.setItem("is_suite_registration", "OK");

      this.authApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          if (res.id){
            this.router.navigateByUrl("/register");
          }else{
            this.router.navigateByUrl("/auth/signup");
          }
        },
        err => {
          console.log(err);
          this.router.navigateByUrl("/auth/signup");
        }
      )
    }
    else{
      sessionStorage.setItem("is_suite_registration", "");

      this.router.navigateByUrl("/auth/signup");
    }
  }

}
