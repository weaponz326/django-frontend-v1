import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // create and get all accounts belonging to user

  public getAccounts(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/account?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  public postAccount(account: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-accounts/account/", account, this.endpoints.headers);
  }

  // retreive, update and delete account

  public getSingleAccount(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), this.endpoints.headers);
  }

  public putAccount(account: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), account, this.endpoints.headers);
  }

  public deleteAccount(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), this.endpoints.headers);
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // transactions

  public getTransactions(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/transaction?account=" + sessionStorage.getItem('account_id'), this.endpoints.headers);
  }

  public postTransaction(transactionData: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-accounts/transaction/", transactionData, this.endpoints.headers);
  }

  public putTransaction(transactionId: any, transactionData: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-accounts/transaction/" + transactionId, transactionData, this.endpoints.headers);
  }

  public deleteTransaction(transactionId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-accounts/transaction/" + transactionId, this.endpoints.headers);
  }

  // all transactions belonging to a user
  public getAllTransactions(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/all-transactions?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

}
