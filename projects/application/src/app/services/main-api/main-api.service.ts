import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  public postSource(source: any): Observable<any>{
    return this.http.post(this.baseUrl + "main/user-source/", { "user_source": source }, { withCredentials: true });
  }

  public getSource(): Observable<any>{
    return this.http.get(this.baseUrl + "main/user-source/", { withCredentials: true });
  }

}
