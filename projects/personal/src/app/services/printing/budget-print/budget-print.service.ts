import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Injectable({
  providedIn: 'root'
})
export class BudgetPrintService {

  constructor(private pdfPrint: PdfPrintService) { }

  // all budget

  printAllBudget(gridData: any){
    let mappedData = gridData.map(function(obj: any){
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

  printViewBudget(formData: any, incomeGridData: any, expenditureGridData: any){
    let incomeMappedData = incomeGridData.map(function(obj: any){
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

    let totalIncome = incomeGridData.reduce((total: number, {amount}: any) => total + Number(amount), 0);
    incomeBody.push(['', '', totalIncome]);

    let expenditureMappedData = expenditureGridData.map(function(obj: any){
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

    let totalExpenditure = expenditureGridData.reduce((total: number, {amount}: any) => total + Number(amount), 0);
    expenditureBody.push(['', '', totalExpenditure]);

    let content = [
      {
        columns: [
          [
            { text: 'Budget Name: ' + formData.budgetName },
            { text: 'Budget Type: ' + formData.budgetType },
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
