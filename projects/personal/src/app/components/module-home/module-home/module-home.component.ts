import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';


@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor() { }

  assetsBasePath = environment.assetsBasePath;

  ngOnInit(): void {
  }

}
