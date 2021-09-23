import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/association/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  associationUrl = environment.associationUrl;
  personalUrl = environment.personalUrl;

  // create and get all sent and recieved by account

  public getRinks(): Observable<any>{
    return this.http.get(this.associationUrl + "module-portal/rink-list?account=" + localStorage.getItem('association_id'));
  }

  public postRink(rink: any): Observable<any>{
    return this.http.post(this.associationUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.associationUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.associationUrl + "accounts/search/?search=" + input);
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.associationUrl + "accounts/search/" + account);
  }

  // get accounts rinks with detailed sender and recipient
  public getSingleRink(rinkId: any): Observable<any>{
    return this.http.get(this.associationUrl + "module-portal/rink/" + rinkId);
  }

  // dashboard

  public getCountRinkDate(): Observable<any>{
    return this.http.get(this.associationUrl + "module-portal/count-rink-date/");
  }

}
