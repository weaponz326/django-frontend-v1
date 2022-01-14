import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-budget',
  templateUrl: './select-budget.component.html',
  styleUrls: ['./select-budget.component.scss']
})
export class SelectBudgetComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @Output() budgetSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  budgetGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getBudgets();
    this.openButton.nativeElement.click();
  }

  getBudgets(){
    this.budgetApi.getBudgets(1, 15, "")
      .subscribe(
        res => {
          console.log(res);
          this.budgetGridData = res.results;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.budgetSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
