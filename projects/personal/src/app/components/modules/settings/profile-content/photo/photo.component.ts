import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ImageUploadComponent } from '../../../../custom-widgets/image-upload/image-upload.component'


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
  @ViewChild('imageUploadComponentReference', { read: ImageUploadComponent, static: false }) imageUpload!: ImageUploadComponent;

  @Output() photoEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitPhoto(){
    let data = {
      photo: this.imageUpload.image
    }

  	this.photoEvent.emit(data);
  }

}
