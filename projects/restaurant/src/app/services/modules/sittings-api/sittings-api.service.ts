import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class SittingsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all sittings belonging to account

  public getSittings(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-sittings/sitting?account=" + localStorage.getItem('restaurant_id'));
  }

  public postSitting(sitting: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-sittings/sitting/", sitting);
  }

  // retreive, update and delete sitting

  public getSingleSitting(appoitmentId: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-sittings/sitting/" + appoitmentId);
  }

  public putSitting(sitting: any, appoitmentId: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-sittings/sitting/" + appoitmentId, sitting);
  }

  public deleteSitting(sittingId: any): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-sittings/sitting/" + sittingId);
  }

}
