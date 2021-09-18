import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  public postSignup(signupForm: any): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/registration/", signupForm);
  }

  public postRegister(regsiterForm: any): Observable<any>{
    return this.http.put(this.personalUrl + "users/user-profile/", regsiterForm);
  }

  public postLogin(loginForm: any): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/login/", loginForm);
  }

  public postRecoveryEmail(email: any): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/", email);
  }

  public sendReset(resetForm: any): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/confirm/", resetForm);
  }

  public postLogout(): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/logout/", this.endpoints.headers);
  }

  public getUser(): Observable<any>{
    return this.http.get(this.personalUrl + "users/rest-auth/user/", this.endpoints.headers);
  }

}
