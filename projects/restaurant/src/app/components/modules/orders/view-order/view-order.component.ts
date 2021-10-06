import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'
import { OrderItemsComponent } from '../order-items/order-items.component';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('orderCodeInputReference', { read: InputComponent, static: false }) orderCodeInput!: InputComponent;
  @ViewChild('orderDateTimePickerReference', { read: DateTimePickerComponent, static: false }) orderDateTimePicker!: DateTimePickerComponent;
  @ViewChild('customerNameInputReference', { read: InputComponent, static: false }) customerNameInput!: InputComponent;
  @ViewChild('orderTypeDropDownListReference', { read: DropDownListComponent, static: false }) orderTypeDropDownList!: DropDownListComponent;
  @ViewChild('orderStatusDropDownListReference', { read: DropDownListComponent, static: false }) orderStatusDropDownList!: DropDownListComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;
  @ViewChild('orderItemsComponentReference', { read: OrderItemsComponent, static: false }) orderItems!: OrderItemsComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
    { text: "View Order", url: "/home/orders/view-order" },
  ];

  orderTypeSource: any[] = ["Sitting", "Delivery", "Drive Through", "Take Away"];
  orderStatusSource: any[] = ["Ordered", "Processing", "Delivered"];

  ngOnInit(): void {
  }

  getOrders(){
    this.ordersApi.getOrders()
      .subscribe(
        res => {
          console.log(res);

          this.orderCodeInput.value = res.order_code;
          this.orderDateTimePicker.value = res.order_date;
          this.customerNameInput.value = res.customer_name;
          this.orderTypeDropDownList.value = res.order_type;
          this.orderStatusDropDownList.value = res.order_status;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  saveOrder(){
    let orderData = {
      account: sessionStorage.getItem('restaurant_id'),
      order_code: this.orderCodeInput.value,
      order_date: this.orderDateTimePicker.value,
      customer_name: this.customerNameInput.value,
      order_type: this.orderTypeDropDownList.value,
      order_status: this.orderStatusDropDownList.value,
      // order_total: this.orderDetails.grid.getcolumnaggregateddata('total_price', ['sum'])['sum'],
    }

    this.ordersApi.putOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )

    console.log(orderData);
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
