import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-sidenav',
  templateUrl: './module-sidenav.component.html',
  styleUrls: ['./module-sidenav.component.scss']
})
export class ModuleSidenavComponent implements OnInit {

  constructor() { }

  @Input() heading: any;
  @Input() navLinks: any[] = [];

  ngOnInit(): void {
  }

}
