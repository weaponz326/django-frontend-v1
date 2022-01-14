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

  // calendar

  // get all calendars belonging to a user
  public getCalendars(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/calendar?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  // get single calendar
  public getCalendar(): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/calendar/" + sessionStorage.getItem('personal_calendar_id'), this.endpoints.headers);
  }

  // create update and delete calendar

  public postCalendar(calendar: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-calendar/calendar/", calendar, this.endpoints.headers);
  }

  public putCalendar(calendar: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-calendar/calendar/" + sessionStorage.getItem('personal_calendar_id'), calendar, this.endpoints.headers);
  }

  public deleteCalendar(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-calendar/calendar/" + sessionStorage.getItem('personal_calendar_id'), this.endpoints.headers);
  }

  // schedules

  // get all schedules belonging to a user
  public getAllSchedules(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/schedule?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  // get all schedules of a calendar
  public getSchedules(): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/schedule?user=" + sessionStorage.getItem('personal_calendar_id'), this.endpoints.headers);
  }

  // get single schedule
  public getSchedule(schedule_id: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/schedule/=" + schedule_id, this.endpoints.headers);
  }

  // create update and delete calendar

  public postSchedule(schedule: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-calendar/schedule/", schedule, this.endpoints.headers);
  }

  public putSchedule(schedule: any, scheduleId: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-calendar/schedule/" + scheduleId, schedule, this.endpoints.headers);
  }

  public deleteSchedule(scheduleId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-calendar/schedule/" + scheduleId, this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
