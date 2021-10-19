import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/school/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  schoolUrl = environment.schoolUrl;
  personalUrl = environment.personalUrl;

  // get all profile categories

  public getAccount(): Observable<any>{
    return this.http.get(this.schoolUrl + "accounts/account/" + localStorage.getItem('school_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-settings/extended-profile/" + localStorage.getItem('school_id'));
  }

  // send basic profile
  public putAccount(account: any): Observable<any>{
    return this.http.put(this.schoolUrl + "accounts/account/" + localStorage.getItem('school_id'), account);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.schoolUrl + "module-settings/extended-profile/" + localStorage.getItem('school_id'), extended);
  }

  // subscriptions

  public getSubscription(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-settings/subscription/" + localStorage.getItem('school_id'));
  }

  public putSubscription(subscription: any): Observable<any>{
    return this.http.put(this.schoolUrl + "module-settings/subscription/" + localStorage.getItem('school_id'), subscription);
  }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-settings/history/" + localStorage.getItem('school_id'));
  }

}
