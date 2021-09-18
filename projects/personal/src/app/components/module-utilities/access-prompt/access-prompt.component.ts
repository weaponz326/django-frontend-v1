import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastComponent } from 'smart-webcomponents-angular/toast';


@Component({
  selector: 'app-access-prompt',
  templateUrl: './access-prompt.component.html',
  styleUrls: ['./access-prompt.component.scss']
})
export class AccessPromptComponent implements OnInit {

  constructor() { }

  @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

  ngOnInit(): void {
  }

}
