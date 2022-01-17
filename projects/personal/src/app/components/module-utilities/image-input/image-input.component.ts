import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';


@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {

  constructor() { }

  @Input() imgType = "logo";
  @Input() height = 120;
  @Input() width = 120;

  assetsBasePath = environment.assetsBasePath;

  image: any;
  imgSrc = '';

  ngOnInit(): void {
    if(this.imgType == 'photo'){
      this.imgSrc = this.assetsBasePath + '../../../../assets/images/utilities/photo-avatar.jpg';
    }
    else if(this.imgType == 'logo'){
      this.imgSrc = this.assetsBasePath + '../../../../assets/images/utilities/logo-placeholder.jpg';
    }
  }

  onImageSelected(e: any){
    const file: File = e.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
        this.image = reader.result;
      }
    }
  }

}
