import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all customer customers belonging to account

  public getCustomers(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-customers/customer?account=" + localStorage.getItem('restaurant_id'));
  }

  public postCustomer(customer: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-customers/customer/", customer);
  }

  // retreive, update and delete customer

  public getSingleCustomer(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-customers/customer/" + sessionStorage.getItem('restaurant_customer_id'));
  }

  public putCustomer(customer: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-customers/customer/" + sessionStorage.getItem('restaurant_customer_id'), customer);
  }

  public deleteCustomer(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-customers/customer/" + sessionStorage.getItem('restaurant_customer_id'));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-customers/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
