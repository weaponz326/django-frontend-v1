import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // get all apointments belonging to a user
  public getSchedules(): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/calendar?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  // create update and delete calendar

  public postSchedule(calendar: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-calendar/calendar/", calendar, this.endpoints.headers);
  }

  public putSchedule(calendar: any, calendarId: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-calendar/calendar/" + calendarId, calendar, this.endpoints.headers);
  }

  public deleteSchedule(calendarId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-calendar/calendar/" + calendarId, this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
