import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @Input() suiteName: string = "";
  @Input() suiteDetails: string = "";

  assetsBasePath = environment.assetsBasePath;

  ngOnInit(): void {
  }

}
