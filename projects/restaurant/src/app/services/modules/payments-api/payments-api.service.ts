import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all payments belonging to user

  public getPayments(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/payment?account=" + localStorage.getItem('restaurant_id'));
  }

  public postPayment(payment: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('restaurant_payment_id'));
  }

  public putPayment(payment: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('restaurant_payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('restaurant_payment_id'));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
