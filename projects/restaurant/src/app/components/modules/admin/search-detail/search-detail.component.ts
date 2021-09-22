import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { environment } from 'projects/restaurant/src/environments/environment';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;
  
  @Input() searchDetail: any;
  @Output() sendInvitationEvent = new EventEmitter<string>();

  personalUrl = environment.personalUrl;

  ngOnInit(): void {
  }

  sendInvitation(){
    this.sendInvitationEvent.emit();
  }

}
