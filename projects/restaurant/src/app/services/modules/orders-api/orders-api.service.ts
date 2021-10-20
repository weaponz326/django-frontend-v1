import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all order belonging to user

  public getOrders(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order?account=" + localStorage.getItem('restaurant_id'));
  }

  public postOrder(order: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-orders/order/", order);
  }

  // retreive, update and delete order

  public getSingleOrder(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('restaurant_order_id'));
  }

  public putOrder(order: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('restaurant_order_id'), order);
  }

  public deleteOrder(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('restaurant_order_id'));
  }

// -----------------------------------------------------------------------------------------------------------------

  // order items

  // create and get all order items belonging to order

  public getItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order-item?order=" + sessionStorage.getItem('restaurant_order_id'));
  }

  public postItem(item: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-orders/order-item/", item);
  }

  // retreive, update and delete order

  public getSingleItem(itemId: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order-item/" + itemId);
  }

  public putItem(itemId: any, itemData: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-orders/order-item/" + itemId, itemData);
  }

  public deleteItem(itemId: any): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-orders/order-item/" + itemId);
  }

  public patchTotal(totalData: any): Observable<any>{
    return this.http.patch(this.restaurantUrl + "module-orders/order-total/" + sessionStorage.getItem('restaurant_order_id'), totalData);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
