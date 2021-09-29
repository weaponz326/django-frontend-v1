import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  public getTasks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task?user=" + localStorage.getItem('personal_id'), this.endpoints.headers);
  }

  public postTask(task: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-tasks/task/", task, this.endpoints.headers);
  }

  // retreive, update and delete task

  public getSingleTask(taskId: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-task/task/" + taskId, this.endpoints.headers);
  }

  public putTask(taskId: any, task: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-task/task/" + taskId, task, this.endpoints.headers);
  }

  public deleteTask(taskId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-task/task/" + taskId, this.endpoints.headers);
  }

}
