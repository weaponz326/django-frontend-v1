import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class RosterApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all roster belonging to user

  public getRoster(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/roster?account=" + localStorage.getItem('restaurant_id'));
  }

  public postRoster(roster: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-roster/roster/", roster);
  }

  // retreive, update and delete roster

  public getSingleRoster(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/roster/" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public putRoster(roster: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-roster/roster/" + sessionStorage.getItem('restaurant_roster_id'), roster);
  }

  public deleteRoster(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-roster/roster/" + sessionStorage.getItem('restaurant_roster_id'));
  }

  // ------------------------------------------------------------------------------------------------------------
  // shifts

  public getShifts(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/shift?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public postShift(shift: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-roster/shift/", shift);
  }

  public putShift(shiftId: any, shift: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-roster/shift/" + shiftId, shift);
  }

  public deleteShift(shiftId: any): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-roster/shift/" + shiftId);
  }

  // ------------------------------------------------------------------------------------------------------------
  // batches

  public getBatches(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/batch?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public postBatch(batch: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-roster/batch/", batch);
  }

  public putBatch(batchId: any, batch: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-roster/batch/" + batchId, batch);
  }

  public deleteBatch(batchId: any): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-roster/batch/" + batchId);
  }

  public getPersonnel(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/personnel?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public putPersonnel(personnelId: any, personnel: any): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-roster/personnel/" + personnelId, personnel);
  }

  public refreshPersonnel(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/refresh-personnel?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // sheet

  public refreshSheet(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/refresh-sheet?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public getRosterDays(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/roster-day?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public getRosterSheet(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/roster-sheet?roster=" + sessionStorage.getItem('restaurant_roster_id'));
  }

  public postRosterSheet(sheet: any): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-roster/roster-sheet/", sheet);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-roster/count?account=" + localStorage.getItem('restaurant_id') + "&model=" + model);
  }

}
