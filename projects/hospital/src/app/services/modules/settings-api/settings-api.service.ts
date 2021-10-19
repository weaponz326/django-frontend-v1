import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hospital/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  hospitalUrl = environment.hospitalUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.hospitalUrl + "accounts/account/" + localStorage.getItem('hospital_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-settings/extended-profile/" + localStorage.getItem('hospital_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.hospitalUrl + "accounts/account/" + localStorage.getItem('hospital_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-settings/extended-profile/" + localStorage.getItem('hospital_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-settings/subscription/" + localStorage.getItem('hospital_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-settings/subscription/" + localStorage.getItem('hospital_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-settings/history/" + localStorage.getItem('hospital_id'));
  }

}
