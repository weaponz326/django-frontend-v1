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
  public getAppointments(): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/appointment?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  // create update and delete appointment

  public postAppointment(appointment: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-calendar/appointment/", appointment, this.endpoints.headers);
  }

  public putAppointment(appointment: any, appointmentId: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-calendar/appointment/" + appointmentId, appointment, this.endpoints.headers);
  }

  public deleteAppointment(appointmentId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-calendar/appointment/" + appointmentId, this.endpoints.headers);
  }

}
