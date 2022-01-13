import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ImageInputComponent } from '../../../../module-utilities/image-input/image-input.component'


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) imageInput!: ImageInputComponent;

  @Output() photoEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitPhoto(){
    let data = {
      photo: this.imageInput.image
    }

  	this.photoEvent.emit(data);
  }

}
