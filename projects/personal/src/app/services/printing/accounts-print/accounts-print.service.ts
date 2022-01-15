import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private accountsApi: AccountsApiService,
  ) { }

  accountsGridData: any[] = [];
  accountFormData: any;
  transactionsGridData: any[] = [];
  allTransactionsGridData: any[] = [];

  // all accounts

  getPrintAccounts(count: any){
    this.accountsApi.getAccounts(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.accountsGridData = res.results;
          this.printAllAccounts();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllAccounts(){
    let mappedData = this.accountsGridData.map(function(obj: any){
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

  getPrintAccount(){
    this.accountsApi.getSingleAccount()
      .subscribe(
        res => {
          console.log(res);
          this.accountFormData = res;
          this.getPrintTransactions();
        },
        err => {
          console.log(err);
        }
      )
  }

  getPrintTransactions(){
    this.accountsApi.getTransactions()
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData = res;
          this.printViewAccount();
        },
        err => {
          console.log(err);
        }
      )
  }

  printViewAccount(){
    let incomeMappedData = this.transactionsGridData.map(function(obj: any){
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
            { text: 'Account Name: ' + this.accountFormData.account_name },
            { text: 'Account No: ' + this.accountFormData.account_number },
            { text: 'Bank Name: ' + this.accountFormData.bank_name },
            { text: 'Account Type: ' + this.accountFormData.account_type },
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

  getPrintAllTransactions(count: any){
    this.accountsApi.getAllTransactions(1, count, "")
      .subscribe(
        res => {
          console.log(res);
          this.allTransactionsGridData = res.results;
          this.printAllTransactions();
        },
        err => {
          console.log(err);
        }
      )
  }

  printAllTransactions(){
    let mappedData = this.allTransactionsGridData.map(function(obj: any){
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
