import { Component, OnInit } from '@angular/core';

import { environment } from 'projects/application/src/environments/environment';


@Component({
  selector: 'app-landing-top',
  templateUrl: './landing-top.component.html',
  styleUrls: ['./landing-top.component.scss']
})
export class LandingTopComponent implements OnInit {

  constructor() { }

  assetsBasePath = environment.assetsBasePath;

  ngOnInit(): void {
  }

}
