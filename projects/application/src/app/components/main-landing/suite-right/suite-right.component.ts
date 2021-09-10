import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-right',
  templateUrl: './suite-right.component.html',
  styleUrls: ['./suite-right.component.scss']
})
export class SuiteRightComponent implements OnInit {

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
