import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/enterprise/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  enterpriseUrl = environment.enterpriseUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "accounts/account/" + localStorage.getItem('enterprise_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-settings/extended-profile/" + localStorage.getItem('enterprise_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.enterpriseUrl + "accounts/account/" + localStorage.getItem('enterprise_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-settings/extended-profile/" + localStorage.getItem('enterprise_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-settings/subscription/" + localStorage.getItem('enterprise_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-settings/subscription/" + localStorage.getItem('enterprise_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-settings/history/" + localStorage.getItem('enterprise_id'));
  }

}
