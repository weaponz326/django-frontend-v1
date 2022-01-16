import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';
import { StockItemFormComponent } from '../stock-item-form/stock-item-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-edit-stock-item',
  templateUrl: './edit-stock-item.component.html',
  styleUrls: ['./edit-stock-item.component.scss']
})
export class EditStockItemComponent implements OnInit {

  constructor(
    private router: Router,
    private kitchenStockApi: KitchenStockApiService
  ) { }

  @ViewChild('stockItemFormComponentReference', { read: StockItemFormComponent, static: false }) stockItemForm!: StockItemFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/home/kitchen-stock/all-stock-items" },
    { text: "View Item", url: "/home/kitchen-stock/view-stock-item" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getKitchenStock();
  }

  getKitchenStock(){
    this.kitchenStockApi.getSingleItem()
      .subscribe(
        res => {
          console.log(res);

          this.stockItemForm.itemCodeInput.value = res.item_code;
          this.stockItemForm.itemNameInput.value = res.item_name;
          this.stockItemForm.categoryInput.value = res.category;
          this.stockItemForm.itemTypeInput.value = res.item_type;
          this.stockItemForm.quantityNumericTextBox.value = res.quantity;
          this.stockItemForm.refillOrderedNumericTextBox.value = res.refill_ordered;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
