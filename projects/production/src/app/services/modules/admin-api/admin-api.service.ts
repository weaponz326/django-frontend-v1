import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/production/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  productionUrl = environment.productionUrl;
  personalUrl = environment.personalUrl;

  // get search results
  public getSearch(input: string): Observable<any>{
    return this.http.get(this.personalUrl + "users/search?search=" + input, this.endpoints.headers);
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.personalUrl + "users/search/" + account, this.endpoints.headers);
  }

  // invitations

  public sendInvitation(invitation: any): Observable<any>{
    return this.http.post(this.productionUrl + "module-admin/invitation/", invitation);
  }

  public getInvitation(): Observable<any>{
    return this.http.get(this.productionUrl + "module-admin/invitation/" + sessionStorage.getItem('production_invitation_id'));
  }

  public getAllInvitations(): Observable<any>{
    return this.http.get(this.productionUrl + "module-admin/invitation?account=" + localStorage.getItem('production_id'));
  }

  // users

  public getAllUsers(): Observable<any>{
    return this.http.get(this.productionUrl + "module-admin/user?account=" + localStorage.getItem('production_id'));
  }

  public getUser(): Observable<any>{
    return this.http.get(this.productionUrl + "module-admin/user/" + sessionStorage.getItem('production_admin_user_id'));
  }

  public getUserAccess(): Observable<any>{
    return this.http.get(this.productionUrl + "module-admin/user-access/" + sessionStorage.getItem('production_admin_user_id'));
  }

  public putUser(user: any): Observable<any>{
    return this.http.put(this.productionUrl + "module-admin/user/" + localStorage.getItem('production_admin_user_id'), user);
  }

  public putUserAccess(userAccess: any): Observable<any>{
    return this.http.put(this.productionUrl + "module-admin/user-access/" + sessionStorage.getItem('production_admin_user_id'), userAccess);
  }

}
