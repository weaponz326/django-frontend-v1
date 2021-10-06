import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
  selector: 'app-stock-item-form',
  templateUrl: './stock-item-form.component.html',
  styleUrls: ['./stock-item-form.component.scss']
})
export class StockItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild('itemCodeInputReference', { read: InputComponent, static: false }) itemCodeInput!: InputComponent;
  @ViewChild('itemNameInputReference', { read: InputComponent, static: false }) itemNameInput!: InputComponent;
  @ViewChild('categoryInputReference', { read: InputComponent, static: false }) categoryInput!: InputComponent;
  @ViewChild('itemTypeInputReference', { read: InputComponent, static: false }) itemTypeInput!: InputComponent;
  @ViewChild('quantityNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) quantityNumericTextBox!: NumericTextBoxComponent;
  @ViewChild('refillOrderedNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) refillOrderedNumericTextBox!: NumericTextBoxComponent;

  ngOnInit(): void {
  }

}
