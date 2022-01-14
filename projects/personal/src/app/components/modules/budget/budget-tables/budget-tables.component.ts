import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { AddIncomeComponent } from '../add-income/add-income.component'
import { EditIncomeComponent } from '../edit-income/edit-income.component'
import { AddExpenditureComponent } from '../add-expenditure/add-expenditure.component'
import { EditExpenditureComponent } from '../edit-expenditure/edit-expenditure.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.scss']
})
export class BudgetTablesComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @Output() ioeEvent = new EventEmitter<any>();

  @ViewChild('addIncomeComponentReference', { read: AddIncomeComponent, static: false }) addIncome!: AddIncomeComponent;
  @ViewChild('editIncomeComponentReference', { read: EditIncomeComponent, static: false }) editIncome!: EditIncomeComponent;
  @ViewChild('addExpenditureComponentReference', { read: AddExpenditureComponent, static: false }) addExpenditure!: AddExpenditureComponent;
  @ViewChild('editExpenditureComponentReference', { read: EditExpenditureComponent, static: false }) editExpenditure!: EditExpenditureComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  incomeGridData: any[] = [];
  expenditureGridData: any[] = [];
  totalIncome = 0;
  totalExpenditure = 0;

  deleteType = "";
  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getIncome();
    this.getExpenditure();
  }

  calculateIoe(){
    let ioe = this.totalIncome - this.totalExpenditure;
    this.ioeEvent.emit(ioe);
    console.log(ioe);
  }

  // income

  calculateTotalIncome(){
    this.totalIncome = this.incomeGridData.reduce((total, {amount}) => total + Number(amount), 0);
    console.log(this.totalIncome);
    this.calculateIoe();
  }

  getIncome(){
    this.budgetApi.getIncome()
      .subscribe(
        res => {
          console.log(res);
          this.incomeGridData = res;
          this.calculateTotalIncome();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postIncome(data: any){
    console.log(data);

    this.budgetApi.postIncome(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.incomeGridData.push(res);
            this.calculateTotalIncome();
            this.addIncome.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putIncome(data: any){
    console.log(data);

    this.budgetApi.putIncome(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.incomeGridData[data.index] = res;
            this.calculateTotalIncome();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteIncome(index: any, id: any){
    console.log(id);

    this.budgetApi.deleteIncome(id)
      .subscribe(
        res => {
          console.log(res);
          this.incomeGridData.splice(index, 1);
          this.calculateTotalIncome();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditIncome(index: any){
    console.log(index);
    this.editIncome.openModal(index, this.incomeGridData[index]);
  }

  // expenditure

  calculateTotalExpenditure(){
    this.totalExpenditure = this.expenditureGridData.reduce((total, {amount}) => total + Number(amount), 0);
    console.log(this.totalExpenditure);
    this.calculateIoe();
  }

  getExpenditure(){
    this.budgetApi.getExpenditure()
      .subscribe(
        res => {
          console.log(res);
          this.expenditureGridData = res;
          this.calculateTotalExpenditure();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postExpenditure(data: any){
    console.log(data);

    this.budgetApi.postExpenditure(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.expenditureGridData.push(res);
            this.calculateTotalExpenditure();
            this.addExpenditure.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putExpenditure(data: any){
    console.log(data);

    this.budgetApi.putExpenditure(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.expenditureGridData[data.index] = res;
            this.calculateTotalExpenditure();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteExpenditure(index: any, id: any){
    console.log(id);

    this.budgetApi.deleteExpenditure(id)
      .subscribe(
        res => {
          console.log(res);
          this.expenditureGridData.splice(index, 1);
          this.calculateTotalExpenditure();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditExpenditure(index: any){
    console.log(index);
    this.editExpenditure.openModal(index, this.expenditureGridData[index]);
  }

  // deletions

  // open confirm delete modal
  confirmDelete(type: any, index: any, id: any){
    console.log(type);

    this.deleteType = type;
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

  // delete income or expenditure
  deleteItem(){
    if(this.deleteType == "Income")
      this.deleteIncome(this.deleteIndex, this.deleteId);
    else if(this.deleteType == "Expenditure")
      this.deleteExpenditure(this.deleteIndex, this.deleteId)
  }

}
