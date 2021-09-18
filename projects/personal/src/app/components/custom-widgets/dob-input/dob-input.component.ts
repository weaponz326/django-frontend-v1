import { Component, OnInit, ViewChild } from '@angular/core';

import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
  selector: 'app-dob-input',
  templateUrl: './dob-input.component.html',
  styleUrls: ['./dob-input.component.scss']
})
export class DobInputComponent implements OnInit {

  constructor() { }

  @ViewChild('dayDropDownListReference', { read: DropDownListComponent, static: false }) dayDropDownList!: DropDownListComponent;
  @ViewChild('monthDropDownListReference', { read: DropDownListComponent, static: false }) monthDropDownList!: DropDownListComponent;
  @ViewChild('yearDropDownListReference', { read: DropDownListComponent, static: false }) yearDropDownList!: DropDownListComponent;

  value: any;
  // dobDaySource = this.getDays();
  // dobMonthSource = this.getMonths();
  // dobYearSource = this.getYears();

  dobDaySource = [];
  dobMonthSource = [];
  dobYearSource = [];

  ngOnInit(): void {
  }

  getDays(): any[] {
    var doubleDigit, n=[];
    for (let i=1; i<=31; i++) {
      doubleDigit = (i >= 10) ? i : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getMonths(): any[] {
    var doubleDigit, n=[];
    for (let i=1; i<=12; i++) {
      doubleDigit = (i >= 10) ? i : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

  emitBday(){
    let formattedDob: any;
    if (this.dayDropDownList.value == '' || this.monthDropDownList.value == '' || this.dayDropDownList.value == '') formattedDob = null;
    else formattedDob = this.dayDropDownList.value + '-' + this.monthDropDownList.value + '-' + this.dayDropDownList.value;

    console.log(this.value, formattedDob);
  	this.value = formattedDob;
  }

}
