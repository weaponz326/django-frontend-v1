import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';


@Injectable({
  providedIn: 'root'
})
export class BudgetPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private budgetApi: BudgetApiService,
  ) { }

  budgetGridData: any[] = [];
  budgetFormData: any;
  incomeGridData: any[] = [];
  expenditureGridData: any[] = [];

  // all budget

  getPrintBudgets(count: any){
    this.budgetApi.getBudgets(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.budgetGridData = res.results;
          this.printAllBudget();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllBudget(){
    let mappedData = this.budgetGridData.map(function(obj: any){
      return {
        budget_name: obj.budget_name,
        budget_type: obj.budget_type,
      }
    });

    var body = [['Budget Name', 'Budget Type']];

    mappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      body.push(row);
    })

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['60%', '40%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view budget

  getPrintBudget(){
    this.budgetApi.getSingleBudget()
      .subscribe(
        res => {
          console.log(res);
          this.budgetFormData = res;
          this.getPrintIncome();
        },
        err => {
          console.log(err);
        }
      )
  }

  getPrintIncome(){
    this.budgetApi.getIncome()
      .subscribe(
        res => {
          console.log(res);
          this.incomeGridData = res;
          this.getPrintExpenditure();
        },
        err => {
          console.log(err);
        }
      )
  }

  getPrintExpenditure(){
    this.budgetApi.getExpenditure()
      .subscribe(
        res => {
          console.log(res);
          this.expenditureGridData = res;
          this.printViewBudget();
        },
        err => {
          console.log(err);
        }
      )
  }

  printViewBudget(){
    let incomeMappedData = this.incomeGridData.map(function(obj: any){
      return {
        item_number: obj.item_number,
        item_description: obj.item_description,
        amount: obj.amount,
      }
    });

    var incomeBody = [['Item No.', 'Description', 'Amount']];
    incomeMappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      incomeBody.push(row);
    })

    let totalIncome = this.incomeGridData.reduce((total: number, {amount}: any) => total + Number(amount), 0);
    incomeBody.push(['', '', totalIncome.toString()]);

    let expenditureMappedData = this.expenditureGridData.map(function(obj: any){
      return {
        item_number: obj.item_number,
        item_description: obj.item_description,
        amount: obj.amount,
      }
    });

    var expenditureBody = [['Item No.', 'Description', 'Amount']];
    expenditureMappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      expenditureBody.push(row);
    })

    let totalExpenditure = this.expenditureGridData.reduce((total: number, {amount}: any) => total + Number(amount), 0);
    expenditureBody.push(['', '', totalExpenditure.toString()]);

    let content = [
      {
        columns: [
          [
            { text: 'Budget Name: ' + this.budgetFormData.budget_name },
            { text: 'Budget Type: ' + this.budgetFormData.budget_type },
          ],
          [
            { text: 'Income over Expenditure', bold: true, alignment: 'center' },
            { text: '$' + (totalIncome - totalExpenditure), bold: true, alignment: 'center' }
          ]
        ]
      },
      {
        columns: [
          [
            { text: 'Income', bold: true, margin: [0, 20, 0, 10] },
            {
              layout: 'lightHorizontalLines',
              table: {
                headerRows: 1,
                // widths: ['15%', '25%', '60%'],
                body: incomeBody
              }
            }
          ],
          [
            { text: 'Expenditure', bold: true, margin: [0, 20, 0, 10] },
            {
              layout: 'lightHorizontalLines',
              table: {
                headerRows: 1,
                // widths: ['15%', '25%', '60%'],
                body: expenditureBody
              }
            }
          ]
        ],
        columnGap: 20
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
