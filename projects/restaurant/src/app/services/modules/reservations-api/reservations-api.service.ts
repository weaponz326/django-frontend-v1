import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class ReservationsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all reservations belonging to account

  public getReservations(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-reservations/reservation?account=" + localStorage.getItem('restaurant_id'));
  }

  public postReservation(reservation: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-reservations/reservation/", reservation);
  }

  // retreive, update and delete reservation

  public getSingleReservation(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-reservations/reservation/" + sessionStorage.getItem("restaurant_reservation_id"));
  }

  public putReservation(reservationData: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-reservations/reservation/" + sessionStorage.getItem("restaurant_reservation_id"), reservationData);
  }

  public deleteReservation(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-reservations/reservation/" + sessionStorage.getItem("restaurant_reservation_id"));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-reservations/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
