import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-module-topnav',
  templateUrl: './module-topnav.component.html',
  styleUrls: ['./module-topnav.component.scss']
})
export class ModuleTopnavComponent implements OnInit {

  constructor() { }

  @Input() headings: any[] = [];
  @Input() showPrint: boolean = false;
  @Output() print = new EventEmitter<object>();

  ngOnInit(): void {
  }

}
