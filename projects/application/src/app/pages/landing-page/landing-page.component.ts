import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  personalUrl = 'https://personal.netrink.com';
  hospitalUrl = 'https://hospital.netrink.com';
  restaurantUrl = 'https://restaurant.netrink.com';
  schoolUrl = 'https://school.netrink.com';
  enterpriseUrl = 'https://enterprise.netrink.com';
  associationUrl = 'https://association.netrink.com';
  hotelUrl = 'https://hotel.netrink.com';
  shopUrl = 'https://shop.netrink.com';
  productionUrl = 'https://production.netrink.com';

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
