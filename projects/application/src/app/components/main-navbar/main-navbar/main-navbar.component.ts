import { Component, Input, OnInit } from '@angular/core';

import { AuthApiService } from 'projects/personal/src/app/services/auth-api/auth-api.service';
import { MainApiService } from '../../../services/main-api/main-api.service';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private mainApi: MainApiService,
  ) { }

  @Input() source: string = "Application";
  @Input() navBrand: string = "NetRink";
  @Input() isForms: boolean = false;

  isLogin: boolean = false;
  name: string = "";

  ngOnInit(): void {
    this.setSource();
    this.getUser();

    if(this.isForms == true){
      localStorage.setItem("suite_registration_type", this.navBrand);
    }
  }

  setSource(){
    this.mainApi.postSource(this.navBrand)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  getUser(){
    this.authApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          if(res.id) {
            this.isLogin = true;
            this.name = res.first_name;
            localStorage.setItem('personal_id', res.id);
          }
        },
        err => {
          console.log(err);
          this.isLogin = false;
        }
      )
  }

  logout(e: any){
    e.stopPropagation();

    this.authApi.postLogout()
      .subscribe(
        res => {
          console.log(res);

          localStorage.removeItem("token");
          localStorage.removeItem("personal_id");
          localStorage.removeItem("hospital_id");
          localStorage.removeItem("restaurant_id");
          localStorage.removeItem("school_id");
          localStorage.removeItem("enterprise_id");
          localStorage.removeItem("association_id");
          localStorage.removeItem("hotel_id");
          localStorage.removeItem("shop_id");
          localStorage.removeItem("production_id");

          // TODO: reload page
        },
        err => {
          console.log(err);
        }
      )

    console.log("u logging out? ...where u going?");
  }

}
