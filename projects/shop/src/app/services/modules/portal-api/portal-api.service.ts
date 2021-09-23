import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/shop/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  shopUrl = environment.shopUrl;
  personalUrl = environment.personalUrl;

  // create and get all sent and recieved by account

  public getRinks(): Observable<any>{
    return this.http.get(this.shopUrl + "module-portal/rink-list?account=" + localStorage.getItem('shop_id'));
  }

  public postRink(rink: any): Observable<any>{
    return this.http.post(this.shopUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.shopUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.shopUrl + "accounts/search/?search=" + input);
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.shopUrl + "accounts/search/" + account);
  }

  // get accounts rinks with detailed sender and recipient
  public getSingleRink(rinkId: any): Observable<any>{
    return this.http.get(this.shopUrl + "module-portal/rink/" + rinkId);
  }

  // dashboard

  public getCountRinkDate(): Observable<any>{
    return this.http.get(this.shopUrl + "module-portal/count-rink-date/");
  }

}
