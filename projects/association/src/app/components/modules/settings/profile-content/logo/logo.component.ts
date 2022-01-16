import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component'


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) imageInput!: ImageInputComponent;

  @Output() logoEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitLogo(){
    let data = {
      logo: this.imageInput.image
    }

  	this.logoEvent.emit(data);
  }

}
