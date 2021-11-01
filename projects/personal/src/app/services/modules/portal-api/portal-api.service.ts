import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // create and get all sent and recieved by user

  public getRinks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/rink-list?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  public postRink(rink: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-portal/rink/", rink, this.endpoints.headers);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.personalUrl + "module-portal/search?input=" + input + "&filter=" + filter, this.endpoints.headers);
    return this.http.get(this.personalUrl + "users/search/?search=" + input, this.endpoints.headers);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.personalUrl + "users/search/" + user, this.endpoints.headers);
  }

  // get users rinks with detailed sender and recipient
  public getSingleRink(rinkId: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/rink/" + rinkId, this.endpoints.headers);
  }

  // get single source for rink details
  // TODO:

  public getSingleTask(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task/" + sessionStorage.getItem('source_id'), this.endpoints.headers);
  }

  public getSingleAppointment(): Observable<any>{
    return this.http.get(this.personalUrl + "module-appointments/appointment/" + sessionStorage.getItem('source_id'), this.endpoints.headers);
  }

  public getSingleNote(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('source_id'), this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
