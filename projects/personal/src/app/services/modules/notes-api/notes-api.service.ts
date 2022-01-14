import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // get all notes and belonging to a user
  public getNotes(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  // get single note and its attachments

  public getNote(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('personal_note_id'), this.endpoints.headers);
  }

  public getFiles(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/file?note=" + sessionStorage.getItem('personal_note_id'), this.endpoints.headers);
  }

  // create, update and delete note

  public postNote(note: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/note/", note, this.endpoints.headers);
  }

  public putNote(note: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/note/"  + sessionStorage.getItem('personal_note_id'), note, this.endpoints.headers);
  }

  public deleteNote(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('personal_note_id'), this.endpoints.headers);
  }

  public postFile(file: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/file/", file, this.endpoints.headers);
  }

  public deleteFile(fileId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-notes/file/" + fileId, this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
