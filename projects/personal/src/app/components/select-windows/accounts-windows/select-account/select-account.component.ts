import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @Output() accountSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  accountsGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getAccounts();
    this.openButton.nativeElement.click();
  }

  getAccounts(){
    this.accountsApi.getAccounts()
      .subscribe(
        res => {
          console.log(res);
          this.accountsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.accountSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
