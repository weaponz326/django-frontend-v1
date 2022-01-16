import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {

  constructor(private customersApi: CustomersApiService) { }

  @ViewChild('newMenuCustomerButtonReference', { read: ButtonComponent, static: false }) newCustomerButton!: ButtonComponent;
  @ViewChild('customersGridReference', { read: GridComponent, static: false }) customersGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getCustomers(){
    this.customersApi.getCustomers()
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
        dataSource: this.getCustomers(),
        dataFields:[
          'id: string',
          'customer_code: string',
          'customer_name: string',
          'phone: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Customer ID", dataField: "customer_code", width: "25%" },
      { label: "Customer Name", dataField: "customer_name", width: "50%" },
      { label: "Phone No.", dataField: "phone", width: "25%" }
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
