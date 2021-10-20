import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class DeliveriesApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all delveiries belonging to user

  public getDeliveries(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/delivery?account=" + localStorage.getItem('restaurant_id'));
  }

  public postDelivery(item: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-deliveries/delivery/", item);
  }

  // retreive, update and delete order

  public getSingleDelivery(itemId: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/delivery/" + itemId);
  }

  public putDelivery(itemId: any, itemData: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-deliveries/delivery/" + itemId, itemData);
  }

  public deleteDelivery(itemId: any): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-deliveries/delivery/" + itemId);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
