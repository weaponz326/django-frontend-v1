import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main-scrollnav',
  templateUrl: './main-scrollnav.component.html',
  styleUrls: ['./main-scrollnav.component.scss']
})
export class MainScrollnavComponent implements OnInit {

  constructor() { }

  @Output() personalEvent = new EventEmitter();
  @Output() hospitalEvent = new EventEmitter();
  @Output() restaurantEvent = new EventEmitter();
  @Output() schoolEvent = new EventEmitter();
  @Output() enterpriseEvent = new EventEmitter();
  @Output() associationEvent = new EventEmitter();
  @Output() hotelEvent = new EventEmitter();
  @Output() shopEvent = new EventEmitter();
  @Output() productionEvent = new EventEmitter();

  ngOnInit(): void {
  }

  onPersonalClicked(e: any) {
    e.preventDefault();
    this.personalEvent.emit();
  }

  onHospitalClicked(e: any) {
    e.preventDefault();
    this.hospitalEvent.emit();
  }

  onRestaurantClicked(e: any) {
    e.preventDefault();
    this.restaurantEvent.emit();
  }

  onSchoolClicked(e: any) {
    e.preventDefault();
    this.schoolEvent.emit();
  }

  onEnterpriseClicked(e: any) {
    e.preventDefault();
    this.enterpriseEvent.emit();
  }

  onAssociationClicked(e: any) {
    e.preventDefault();
    this.associationEvent.emit();
  }

  onHotelClicked(e: any) {
    e.preventDefault();
    this.hotelEvent.emit();
  }

  onShopClicked(e: any) {
    e.preventDefault();
    this.shopEvent.emit();
  }

  onProductionClicked(e: any) {
    e.preventDefault();
    this.productionEvent.emit();
  }

}
