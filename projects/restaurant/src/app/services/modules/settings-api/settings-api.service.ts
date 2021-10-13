import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;
  personalUrl = environment.personalUrl;

  public getAccount(): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/account/" + localStorage.getItem('restaurant_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/extended-profile/" + localStorage.getItem('restaurant_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "accounts/account/" + localStorage.getItem('restaurant_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-settings/extended-profile/" + localStorage.getItem('restaurant_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/subscription/" + localStorage.getItem('restaurant_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-settings/subscription/" + localStorage.getItem('restaurant_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/history/" + localStorage.getItem('restaurant_id'));
  }

}
