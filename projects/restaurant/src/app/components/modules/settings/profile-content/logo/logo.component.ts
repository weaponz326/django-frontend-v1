import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ImageUploadComponent } from 'projects/personal/src/app/components/custom-widgets/image-upload/image-upload.component'


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;
  @ViewChild('imageUploadComponentReference', { read: ImageUploadComponent, static: false }) imageUpload!: ImageUploadComponent;

  @Output() logoEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitLogo(){
    let data = {
      logo: this.imageUpload.image
    }

  	this.logoEvent.emit(data);
  }

}
