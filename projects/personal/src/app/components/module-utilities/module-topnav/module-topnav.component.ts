import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-topnav',
  templateUrl: './module-topnav.component.html',
  styleUrls: ['./module-topnav.component.scss']
})
export class ModuleTopnavComponent implements OnInit {

  constructor() { }

  @Input() headings: any[] = [];

  ngOnInit(): void {
  }

}
