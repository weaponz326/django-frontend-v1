import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { BudgetPrintService } from 'projects/personal/src/app/services/printing/budget-print/budget-print.service';

import { BudgetTablesComponent } from '../budget-tables/budget-tables.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.scss']
})
export class ViewBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    private budgetPrint: BudgetPrintService
  ) { }

  @ViewChild('budgetTablesComponentReference', { read: BudgetTablesComponent, static: false }) budgetTables!: BudgetTablesComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
    { text: "View Budget", url: "/home/budget/view-budget" },
  ];

  budgetForm: FormGroup = new FormGroup({});

  ioe = 0;

  isBudgetSaving: boolean = false;
  isBudgetDeleting: boolean = false;

  ngOnInit(): void {
    this.initBudgetForm();
  }

  ngAfterViewInit(): void {
    this.getBudget();
  }

  initBudgetForm(){
    this.budgetForm = new FormGroup({
      budgetName: new FormControl(''),
      budgetType: new FormControl('')
    })
  }

  getBudget(){
    this.budgetApi.getSingleBudget()
      .subscribe(
        res => {
          console.log(res);
          this.budgetForm.controls.budgetName.setValue(res.budget_name);
          this.budgetForm.controls.budgetType.setValue(res.budget_type);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putBudget(){
    let data = {
      user: localStorage.getItem('personal_id'),
      budget_name: this.budgetForm.controls.budgetName.value,
      budget_type: this.budgetForm.controls.budgetType.value
    }

    console.log(data);
    this.isBudgetSaving = true;

    this.budgetApi.putBudget(data)
      .subscribe(
        res => {
          console.log(res);
          this.isBudgetSaving = false;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
          this.isBudgetSaving = false;
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteBudget(){
    this.isBudgetDeleting = true;

    this.budgetApi.deleteBudget()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/home/budget/all-budget');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
          this.isBudgetDeleting = false;
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.budgetPrint.getPrintBudget();
  }

}
