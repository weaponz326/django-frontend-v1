import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.scss']
})
export class AllPaymentsComponent implements OnInit {

  constructor(private paymentsApi: PaymentsApiService) { }

  @ViewChild('newMenuPaymentButtonReference', { read: ButtonComponent, static: false }) newPaymentButton!: ButtonComponent;
  @ViewChild('paymentsGridReference', { read: GridComponent, static: false }) paymentsGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Payments", url: "/home/payments/all-payments" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getPayments(){
    this.paymentsApi.getPayments()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getPayments(),
        dataFields:[
          'id: string',
          'payment_code: string',
          'payment_date: string',
          'customer: string',
          'amount_paid: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Payment ID", dataField: "payment_code", width: "20%" },
      { label: "Payment Date", dataField: "payment_date", width: "20%" },
      { label: "Customer Name", dataField: "customer", width: "40%" },
      { label: 'Amount Paid', dataField: 'amount_paid', width: "20%" }
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
