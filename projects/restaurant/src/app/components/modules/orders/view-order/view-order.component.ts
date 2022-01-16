import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { OrderFormComponent } from '../order-form/order-form.component';
import { OrderItemsComponent } from '../order-items/order-items.component';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('orderFormComponentReference', { read: OrderFormComponent, static: false }) orderForm!: OrderFormComponent;
  @ViewChild('orderItemsComponentReference', { read: OrderItemsComponent, static: false }) orderItems!: OrderItemsComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
    { text: "View Order", url: "/home/orders/view-order" },
  ];

  ngOnInit(): void {
  }

  getOrders(){
    this.ordersApi.getOrders()
      .subscribe(
        res => {
          console.log(res);

          this.orderForm.orderCodeInput.value = res.order_code;
          this.orderForm.orderDateTimePicker.value = res.order_date;
          this.orderForm.orderTypeDropDownList.value = res.order_type;
          this.orderForm.orderStatusDropDownList.value = res.order_status;

          this.orderForm.selectedCustomerId = res.customer.id;
          this.orderForm.customerNameInput.value = res.customer.customer_name;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveOrder(){
    let orderData = {
      account: sessionStorage.getItem('restaurant_id'),
      order_code: this.orderForm.orderCodeInput.value,
      order_date: this.orderForm.orderDateTimePicker.value,
      customer: this.orderForm.selectedCustomerId,
      customer_name: this.orderForm.customerNameInput.value,
      order_type: this.orderForm.orderTypeDropDownList.value,
      order_status: this.orderForm.orderStatusDropDownList.value,
      // order_total: this.orderDetails.grid.getcolumnaggregateddata('total_price', ['sum'])['sum'],
    }

    this.ordersApi.putOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    console.log(orderData);
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
