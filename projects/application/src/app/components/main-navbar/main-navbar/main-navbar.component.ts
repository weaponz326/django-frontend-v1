import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';

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
  email: string = "";
  profilePhotoSrc: string = "../../../../assets/images/utilities/photo-avatar.jpg";

  ngOnInit(): void {
    this.getUser();

    if(!this.isForms){
      this.setSource();
    }
  }

  setSource(){
    sessionStorage.setItem('app_source', this.navBrand);

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
            this.email = res.email;
            if(res.photo != null) this.profilePhotoSrc = environment.personalUrl + res.photo;

            let full_name = res.first_name + " " + res.last_name;;
            localStorage.setItem('personal_id', res.id);
            sessionStorage.setItem('personal_name', full_name);
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

          window.location.href = "/";
        },
        err => {
          console.log(err);
        }
      )

    console.log("u logging out? ...where u going?");
  }

}
