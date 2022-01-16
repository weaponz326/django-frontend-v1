import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { OrderFormComponent } from '../order-form/order-form.component';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('orderFormComponentReference', { read: OrderFormComponent, static: false }) orderForm!: OrderFormComponent;

  navHeading: any[] = [
    { text: "Add Order", url: "/home/orders/add-order" },
  ];

  ngOnInit(): void {
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

    this.ordersApi.postOrder(orderData)
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

}
