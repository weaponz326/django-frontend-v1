import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-bday-input',
  templateUrl: './bday-input.component.html',
  styleUrls: ['./bday-input.component.scss']
})
export class BdayInputComponent implements OnInit {

  constructor() { }

  dayInput = "";
  monthInput = "";
  yearInput = "";
  value = this.dayInput + "-" + this.monthInput + "-" + this.yearInput;

  dobDaySource = this.getDays();
  dobMonthSource = this.getMonths();
  dobYearSource = this.getYears();

  ngOnInit(): void {
  }

  getDays(): any[] {
    var doubleDigit, n=[];

    for (let i=1; i<=31; i++) {
      doubleDigit = (i >= 10) ? i.toString() : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getMonths(): any[] {
    var doubleDigit, n=[];

    for (let i=1; i<=12; i++) {
      doubleDigit = (i >= 10) ? i.toString() : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2022; i++) n.push(i.toString());
    return n;
  }

}
