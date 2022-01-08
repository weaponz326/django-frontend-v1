import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsPrintService {

  constructor(private pdfPrint: PdfPrintService) { }

  // all accounts

  printAllAccounts(gridData: any){
    let mappedData = gridData.map(function(obj: any){
      return {
        account_name: obj.account_name,
        account_number: obj.account_number,
        bank_name: obj.bank_name,
      }
    });

    var body = [['Account Name', 'Account Number', 'Bank Name']];

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
          widths: ['45%', '25%', '30%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view account

  printViewAccount(formData: any, gridData: any){
    let incomeMappedData = gridData.map(function(obj: any){
      return {
        transaction_date: new Date(obj.transaction_date).toISOString().slice(0, 16),
        description: obj.description,
        transaction_type: obj.transaction_type,
        amount: obj.amount,
      }
    });

    var body = [['Transaction Date', 'Description', 'Transaction Type', 'Amount']];
    incomeMappedData.forEach((data: any) => {
      var row = [];
      for(let x in data){
        row.push(data[x]);
      }
      body.push(row);
    })

    let content = [
      {
        columns: [
          [
            { text: 'Account Name: ' + formData.accountName },
            { text: 'Account No: ' + formData.accountNumber },
            { text: 'Bank Name: ' + formData.bankName },
            { text: 'Account Type: ' + formData.accountType },
          ],
          [
            { text: 'Account Balance', bold: true, alignment: 'center' },
            { text: '$', bold: true, alignment: 'center' }
          ]
        ]
      },
      { text: 'Transactions', bold: true, margin: [0, 20, 0, 10] },
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['25%', '35%', '20%', '20%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all transaction

  printAllTransactions(gridData: any){
    let mappedData = gridData.map(function(obj: any){
      return {
        transaction_date: new Date(obj.transaction_date).toISOString().slice(0, 16),
        account_name: obj.account.account_name,
        bank_name: obj.account.bank_name,
        description: obj.description,
        transaction_type: obj.transaction_type,
        amount: obj.amount,
      }
    });

    var body = [['Transaction Date', 'Account Name', 'Bank Name', 'Description', 'Transaction Type', 'Amount']];

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
          widths: ['15%', '20%', '18%', '23%', '12%', '12%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
