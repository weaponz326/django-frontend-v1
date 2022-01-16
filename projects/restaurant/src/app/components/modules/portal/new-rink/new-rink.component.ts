import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { SelectMenuGroupComponent } from '../../../select-windows/menu-windows/select-menu-group/select-menu-group.component';
import { SelectMenuItemComponent } from '../../../select-windows/menu-windows/select-menu-item/select-menu-item.component';
import { SelectStaffComponent } from '../../../select-windows/staff-windows/select-staff/select-staff.component';
import { SelectOrderComponent } from '../../../select-windows/orders-windows/select-order/select-order.component';
import { SelectDeliveryComponent } from '../../../select-windows/deliveries-windows/select-delivery/select-delivery.component';
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';
import { SelectReservationComponent } from '../../../select-windows/reservations-windows/select-reservation/select-reservation.component';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('nameInputReference', { read: InputComponent, static: false }) nameInput!: InputComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;
  @ViewChild('typeDropDownListReference', { read: InputComponent, static: false }) typeDropDownList!: InputComponent;
  @ViewChild('sourceInputReference', { read: InputComponent, static: false }) sourceInput!: InputComponent;
  @ViewChild('sourceButtonReference', { read: ButtonComponent, static: false }) sourceButton!: ButtonComponent;
  @ViewChild('commentTextAreaReference', { read: MultilineTextBoxComponent, static: false }) commentTextArea!: MultilineTextBoxComponent;
  @ViewChild('sendButtonReference', { read: ButtonComponent, static: false }) sendButton!: ButtonComponent;
  @ViewChild('cancelButtonReference', { read: ButtonComponent, static: false }) cancelButton!: ButtonComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  @ViewChild('selectMenuGroupComponentReference', { read: SelectMenuGroupComponent, static: false }) selectMenuGroup!: SelectMenuGroupComponent;
  @ViewChild('selectMenuItemComponentReference', { read: SelectMenuItemComponent, static: false }) selectMenuItem!: SelectMenuItemComponent;
  @ViewChild('selectStaffComponentReference', { read: SelectStaffComponent, static: false }) selectStaff!: SelectStaffComponent;
  @ViewChild('selectOrderComponentReference', { read: SelectOrderComponent, static: false }) selectOrder!: SelectOrderComponent;
  @ViewChild('selectDeliveryComponentReference', { read: SelectDeliveryComponent, static: false }) selectDelivery!: SelectDeliveryComponent;
  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;
  @ViewChild('selectReservationComponentReference', { read: SelectReservationComponent, static: false }) selectReservation!: SelectReservationComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  selectedSourceId: any;
  typeSource: any[] = [
    'Customer',
    'Delivery',
    'Menu Item',
    'Menu Group',
    'Order',
    'Staff',
    'Reservation',
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.portalApi.getDetail(String(sessionStorage.getItem('restaurantSearchUser')))
      .subscribe(
        res => {
          console.log(res);
          this.nameInput.value = res.first_name + " " + res.last_name;
          this.locationInput.value = res.location;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sendRink(){
    let rinkData = {
      sender: localStorage.getItem('restaurant_id'),
      recipient: sessionStorage.getItem('restaurant_rink_recipient'),
      rink_type: this.typeDropDownList.value,
      // rink_source: this.selectedSourceId,
      comment: this.commentTextArea.value
    }

    console.log(rinkData);
    this.sendButton.disabled = true;

    this.portalApi.postRink(rinkData)
      .subscribe(
        res => {
          console.log(res);
          this.sendButton.disabled = false;

          if (res.message == "OK"){
            sessionStorage.setItem('restaurant_rink_id', res.data.id);
            this.router.navigateByUrl('/home/portal/view-rink');
          }
        },
        err => {
          console.log(err);
          this.sendButton.disabled = false;
          this.connectionToast.openToast();
        }
      )
  }

  onTypeSelected(event: any){
    this.sourceButton.disabled = false;
    this.sourceInput.value = "";
  }

  openSourceWindow(){
    let type = this.typeDropDownList.value;

    if (type == "Menu Group") this.selectMenuGroup.window.open();
    else if (type == "Menu Item") this.selectMenuItem.window.open();
    else if (type == "Staff") this.selectStaff.window.open();
    else if (type == "Order") this.selectOrder.window.open();
    else if (type == "Delivery") this.selectDelivery.window.open();
    else if (type == "Customer") this.selectCustomer.window.open();
    else if (type == "Reservation") this.selectReservation.window.open();
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.typeDropDownList.value;
    this.selectedSourceId = sourceData.id;

    if (type == "Menu Group") this.sourceInput.value = sourceData.menu_group;
    else if (type == "Menu Item") this.sourceInput.value = sourceData.item_name;
    else if (type == "Staff") this.sourceInput.value = sourceData.staff_name;
    else if (type == "Order") this.sourceInput.value = sourceData.order_code;
    else if (type == "Delivery") this.sourceInput.value = sourceData.delivery_code;
    else if (type == "Customer") this.sourceInput.value = sourceData.customer_name;
    else if (type == "Reservation") this.sourceInput.value = sourceData.reservation_code;
  }

}
