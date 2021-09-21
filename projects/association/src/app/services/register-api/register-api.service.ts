import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  associationUrl = environment.associationUrl;

  public postProfile(profile: any): Observable<any>{
    return this.http.post(this.associationUrl + "accounts/account/", profile);
  }

  public hasAccount(): Observable<any>{
    console.log(localStorage.getItem('personal_id'));
    return this.http.post(this.associationUrl + "accounts/has-account/", { personal_id: localStorage.getItem('personal_id') });
  }

  public getUserAccounts(): Observable<any>{
    return this.http.get(this.associationUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  }

  public postSelectedAccount(accountId: any): Observable<any>{
    return this.http.post(this.associationUrl + "accounts/active-account/", { active_account: accountId }, { withCredentials: true });
  }

}
