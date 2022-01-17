import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.scss']
})
export class NewBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  budgetForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initBudgetForm();
  }

  openModal(){
    this.budgetForm.controls.budgetType.setValue("Monthly");

    this.buttonElement.nativeElement.click();
  }

  initBudgetForm(){
    this.budgetForm = new FormGroup({
      budgetName: new FormControl(''),
      budgetType: new FormControl('')
    })
  }

  postBudget(){
    let data = {
      user: localStorage.getItem('personal_id'),
      budget_name: this.budgetForm.controls.budgetName.value,
      budget_type: this.budgetForm.controls.budgetType.value
    }

    console.log(data);

    // this.budgetApi.postBudget(data)
    //   .subscribe(
    //     res => {
    //       console.log(res);

    //       if(res.id){
    //         sessionStorage.setItem('personal_budget_id', res.id);
    //         this.router.navigateByUrl('/home/budget/view-budget');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionToast.openToast();
    //     }
    //   )
  }

}
