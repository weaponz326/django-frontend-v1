import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastComponent } from 'smart-webcomponents-angular/toast';


@Component({
  selector: 'app-connection-prompt',
  templateUrl: './connection-prompt.component.html',
  styleUrls: ['./connection-prompt.component.scss']
})
export class ConnectionPromptComponent implements OnInit {

  constructor() { }

  @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

  ngOnInit(): void {
  }

}
