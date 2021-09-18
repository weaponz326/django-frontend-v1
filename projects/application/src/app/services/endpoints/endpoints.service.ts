import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  token = new HttpHeaders()
    .set('Authorization', "Token " + localStorage.getItem('token'));

  headers = { 'headers': this.token };

}
