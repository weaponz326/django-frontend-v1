import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';


@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent implements OnInit {

  constructor() { }

  @Input() formHeading: string = "";

  assetsBasePath = environment.assetsBasePath;

  ngOnInit(): void {
  }

}
