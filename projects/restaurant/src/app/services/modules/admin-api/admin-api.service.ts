import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;
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
    return this.http.post(this.restaurantUrl + "module-admin/invitation/", invitation);
  }

  public getInvitation(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/invitation/" + sessionStorage.getItem('restaurant_invitation_id'));
  }

  public getAllInvitations(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/invitation?account=" + localStorage.getItem('restaurant_id'));
  }

  // users

  public getAllUsers(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user?account=" + localStorage.getItem('restaurant_id'));
  }

  public getUser(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user/" + sessionStorage.getItem('restaurant_admin_user_id'));
  }

  public getUserAccess(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user-access/" + sessionStorage.getItem('restaurant_admin_user_id'));
  }

  public putUser(user: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-admin/user/" + localStorage.getItem('restaurant_admin_user_id'), user);
  }

  public putUserAccess(userAccess: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-admin/user-access/" + sessionStorage.getItem('restaurant_admin_user_id'), userAccess);
  }

}
