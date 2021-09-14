import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  token = localStorage.getItem('token');

  headers = new HttpHeaders()
    .set('Authorization', "Token " + this.token);

}
