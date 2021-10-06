import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  constructor() { }

  @ViewChild('tableNumberInputReference', { read: InputComponent, static: false }) tableNumberInput!: InputComponent;
  @ViewChild('tableTypeInputReference', { read: InputComponent, static: false }) tableTypeInput!: InputComponent;
  @ViewChild('capacityNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) capacityNumericTextBox!: NumericTextBoxComponent;
  @ViewChild('tableStatusDropDownListReference', { read: DropDownListComponent, static: false }) tableStatusDropDownList!: DropDownListComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;

  statusSource: any[] = ["Occupied", "Vacant", "Need Cleaning"];

  ngOnInit(): void {
  }

}
