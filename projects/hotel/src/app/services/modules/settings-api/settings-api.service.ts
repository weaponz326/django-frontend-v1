import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hotel/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  hotelUrl = environment.hotelUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.hotelUrl + "accounts/account/" + localStorage.getItem('hotel_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-settings/extended-profile/" + localStorage.getItem('hotel_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.hotelUrl + "accounts/account/" + localStorage.getItem('hotel_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.hotelUrl + "module-settings/extended-profile/" + localStorage.getItem('hotel_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-settings/subscription/" + localStorage.getItem('hotel_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.hotelUrl + "module-settings/subscription/" + localStorage.getItem('hotel_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-settings/history/" + localStorage.getItem('hotel_id'));
  }

}
