import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class MenuApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all menu groups belonging to user

  public getMenuGroups(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-group?account=" + localStorage.getItem('restaurant_id'));
  }

  public postMenuGroup(group: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-menu/menu-group/", group);
  }

  // retreive, update and delete menu group

  public getSingleMenuGroup(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-group/" + sessionStorage.getItem('restaurant_menu_group_id'));
  }

  public putMenuGroup(item: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-menu/menu-group/" + sessionStorage.getItem('restaurant_menu_group_id'), item);
  }

  public deleteMenuGroup(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-menu/menu-group/" + sessionStorage.getItem('restaurant_menu_group_id'));
  }

  // create and get all menu items belonging to user

  public getMenuItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-item?account=" + sessionStorage.getItem('restaurant_menu_group_id'));
  }

  public postMenuItem(item: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-menu/menu-item/", item);
  }

  // retreive, update and delete menu item

  public getSingleMenuItem(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('restaurant_menu_item_id'));
  }

  public putMenuItem(item: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('restaurant_menu_item_id'), item);
  }

  public deleteMenuItem(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('restaurant_menu_item_id'));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/annotate?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
