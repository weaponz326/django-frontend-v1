import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-left',
  templateUrl: './suite-left.component.html',
  styleUrls: ['./suite-left.component.scss']
})
export class SuiteLeftComponent implements OnInit {

  constructor() { }

  @Input() suiteImageSrc: string = "";
  @Input() suiteDivId: string = "";
  @Input() suiteName: string = "";
  @Input() suiteDescription: string = "";
  @Input() suiteUses: any;
  @Input() suiteButtonLink: string = "";

  ngOnInit(): void {
  }

}
