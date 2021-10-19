import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/production/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  productionUrl = environment.productionUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.productionUrl + "accounts/account/" + localStorage.getItem('production_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.productionUrl + "module-settings/extended-profile/" + localStorage.getItem('production_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.productionUrl + "accounts/account/" + localStorage.getItem('production_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.productionUrl + "module-settings/extended-profile/" + localStorage.getItem('production_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.productionUrl + "module-settings/subscription/" + localStorage.getItem('production_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.productionUrl + "module-settings/subscription/" + localStorage.getItem('production_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.productionUrl + "module-settings/history/" + localStorage.getItem('production_id'));
  }

}
