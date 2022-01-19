import { Component, OnInit } from '@angular/core';

import { environment } from 'projects/application/src/environments/environment';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  personalUrl = environment.personalUrl;
  hospitalUrl = environment.hospitalUrl;
  restaurantUrl = environment.restaurantUrl;
  schoolUrl = environment.schoolUrl;
  enterpriseUrl = environment.enterpriseUrl;
  associationUrl = environment.associationUrl;
  hotelUrl = environment.hotelUrl;
  shopUrl = environment.shopUrl;
  productionUrl = environment.productionUrl;

  ngOnInit(): void {
  }

  gotoPersonal() {
    document.querySelector('#personalComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoHospital() {
    document.querySelector('#hospitalComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoRestaurant() {
    document.querySelector('#restaurantComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoSchool() {
    document.querySelector('#schoolComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoEnterprise() {
    document.querySelector('#enterpriseComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoAssociation() {
    document.querySelector('#associationComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoHotel() {
    document.querySelector('#hotelComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoShop() {
    document.querySelector('#shopComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoProduction() {
    document.querySelector('#productionComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

}
