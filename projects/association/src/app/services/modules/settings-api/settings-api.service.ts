import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/association/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  associationUrl = environment.associationUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.associationUrl + "accounts/account/" + localStorage.getItem('association_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.associationUrl + "module-settings/extended-profile/" + localStorage.getItem('association_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.associationUrl + "accounts/account/" + localStorage.getItem('association_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.associationUrl + "module-settings/extended-profile/" + localStorage.getItem('association_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.associationUrl + "module-settings/subscription/" + localStorage.getItem('association_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.associationUrl + "module-settings/subscription/" + localStorage.getItem('association_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.associationUrl + "module-settings/history/" + localStorage.getItem('association_id'));
  }

}
