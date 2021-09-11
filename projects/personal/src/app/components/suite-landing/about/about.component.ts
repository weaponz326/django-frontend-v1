import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @Input() suiteName: string = "";
  @Input() suiteDetails: string = "";

  ngOnInit(): void {
  }

}
