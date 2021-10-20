import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class TablesApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  public getTables(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-tables/table?account=" + localStorage.getItem('restaurant_id'));
  }

  public postTable(table: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-tables/table/", table);
  }

  // retreive, update and delete table

  public getSingleTable(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('restaurant_table_id'));
  }

  public putTable(table: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('restaurant_table_id'), table);
  }

  public deleteTable(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('restaurant_table_id'));
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-tables/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
