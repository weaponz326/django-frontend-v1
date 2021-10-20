import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;
  personalUrl = environment.personalUrl;

  // create and get all sent and recieved by account

  public getRinks(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-portal/rink-list?account=" + localStorage.getItem('restaurant_id'));
  }

  public postRink(rink: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.restaurantUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.restaurantUrl + "accounts/search/?search=" + input + "&account=" + localStorage.getItem('restaurant_id'));
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/search/" + account);
  }

  // get accounts rinks with detailed sender and recipient
  public getSingleRink(rinkId: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-portal/rink/" + rinkId);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-portal/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
