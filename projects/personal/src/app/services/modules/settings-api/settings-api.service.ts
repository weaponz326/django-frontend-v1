import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // get all profile categories

  public getUser(): Observable<any>{
    return this.http.get(this.personalUrl + "users/rest-auth/user/", this.endpoints.headers);
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/extended-profile/" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  // send basic profile
  public putUser(user: any): Observable<any>{
    return this.http.put(this.personalUrl + "users/user/" + localStorage.getItem('personal_id'), user, this.endpoints.headers);
  }

  // send extended profile
  public putExtendedProfile(extended: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/extended-profile/" + localStorage.getItem('personal_id'), extended, this.endpoints.headers);
  }

  // get all suite accounts
  public getUserAccounts(suiteUrl: any): Observable<any>{
    return this.http.get(suiteUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  }

}
