import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  hospitalUrl = environment.hospitalUrl;

  public postProfile(profile: any): Observable<any>{
    return this.http.post(this.hospitalUrl + "accounts/profile/", profile);
  }

}
