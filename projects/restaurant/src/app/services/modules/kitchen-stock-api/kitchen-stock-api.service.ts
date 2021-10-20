import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class KitchenStockApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all items belonging to user

  public getItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-kitchen-stock/stock-item?account=" + localStorage.getItem('restaurant_id'));
  }

  public postItem(item: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-kitchen-stock/stock-item/", item);
  }

  // retreive, update and delete item

  public getSingleItem(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-kitchen-stock/stock-item/" + sessionStorage.getItem('restaurant_stock_item_id'));
  }

  public putItem(itemData: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-kitchen-stock/stock-item/" + sessionStorage.getItem('restaurant_stock_item_id'), itemData);
  }

  public deleteItem(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-kitchen-stock/stock-item/" + sessionStorage.getItem('restaurant_stock_item_id'));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-kitchen-stock/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
