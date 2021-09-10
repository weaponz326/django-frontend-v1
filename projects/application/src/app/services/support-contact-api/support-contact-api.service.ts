import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/application/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupportContactApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  public postSupport(support: any): Observable<any>{
    return this.http.post(this.baseUrl + "support/support-contact/", support);
  }

}
