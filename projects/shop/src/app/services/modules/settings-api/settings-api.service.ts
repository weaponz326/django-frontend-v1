import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/shop/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  shopUrl = environment.shopUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.shopUrl + "accounts/account/" + localStorage.getItem('shop_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.shopUrl + "module-settings/extended-profile/" + localStorage.getItem('shop_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.shopUrl + "accounts/account/" + localStorage.getItem('shop_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.shopUrl + "module-settings/extended-profile/" + localStorage.getItem('shop_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.shopUrl + "module-settings/subscription/" + localStorage.getItem('shop_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.shopUrl + "module-settings/subscription/" + localStorage.getItem('shop_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.shopUrl + "module-settings/history/" + localStorage.getItem('shop_id'));
  }

}
