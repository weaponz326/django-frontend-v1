import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  token = localStorage.getItem('auth_token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + this.token
  });

}
