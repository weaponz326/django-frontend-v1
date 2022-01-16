import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';
import { StockItemFormComponent } from '../stock-item-form/stock-item-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-add-stock-item',
  templateUrl: './add-stock-item.component.html',
  styleUrls: ['./add-stock-item.component.scss']
})
export class AddStockItemComponent implements OnInit {

  constructor(
    private router: Router,
    private kitchenStockApi: KitchenStockApiService
  ) { }

  @ViewChild('stockItemFormComponentReference', { read: StockItemFormComponent, static: false }) stockItemForm!: StockItemFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Item", url: "/home/kitchen-stock/add-stock-item" },
  ];

  ngOnInit(): void {
  }

  saveStockItem(){
    console.log('u are saving a new payment');

    var paymentData = {
      account: localStorage.getItem('restaurant_id'),
      item_code: this.stockItemForm.itemCodeInput.value,
      item_name: this.stockItemForm.itemNameInput.value,
      category: this.stockItemForm.categoryInput.value,
      item_type: this.stockItemForm.itemTypeInput.value,
      quantity: this.stockItemForm.quantityNumericTextBox.value,
      refill_ordered: this.stockItemForm.refillOrderedNumericTextBox.value,
    }

    console.log(paymentData);

    this.kitchenStockApi.postItem(paymentData)
      .subscribe(
        res => {
          console.log(res);

          sessionStorage.setItem('restaurant_stock_item_id', res.id);
          this.router.navigateByUrl('/home/kitchen-stock/view-stock-item');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
