import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss']
})
export class SelectPaymentComponent implements OnInit {

  constructor(private paymentsApi: PaymentsApiService) { }

  @Output() rowSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

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

  selectRow(event: any){
    this.rowSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
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
          'amount_paid: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Payment ID", dataField: "payment_code", width: "30%" },
      { label: "Payment Date", dataField: "payment_date", width: "40%" },
      { label: 'Amount Paid', dataField: 'amount_paid', width: "30%" }
    ]
  }

}
