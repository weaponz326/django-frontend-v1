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

  public getTaskGroups(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task-group?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  public postTaskGroup(task: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-tasks/task-group/", task, this.endpoints.headers);
  }

  // retreive, update and delete task

  public getSingleTaskGroup(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task-group/" + sessionStorage.getItem('personal_task_group_id'), this.endpoints.headers);
  }

  public putTaskGroup(task: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-tasks/task-group/" + sessionStorage.getItem('personal_task_group_id'), task, this.endpoints.headers);
  }

  public deleteTaskGroup(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-tasks/task-group/" + sessionStorage.getItem('personal_task_group_id'), this.endpoints.headers);
  }

  // tasks

  public getAllTaskItems(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/all-task-item?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  public getTasks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task-item?task_group=" + sessionStorage.getItem('personal_task_group_id'), this.endpoints.headers);
  }

  public postTask(task: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-tasks/task-item/", task, this.endpoints.headers);
  }

  // retreive, update and delete task

  public getSingleTask(taskId: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task-item/" + taskId, this.endpoints.headers);
  }

  public putTask(taskId: any, task: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-tasks/task-item/" + taskId, task, this.endpoints.headers);
  }

  public deleteTask(taskId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-tasks/task-item/" + taskId, this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
