import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }

  @Input() imgType = "logo";
  @Input() height = 120;
  @Input() width = 120;

  image: any;
  imgSrc = '';

  ngOnInit(): void {
    if(this.imgType == 'photo'){
      this.imgSrc = '../../../../assets/images/utilities/photo-avatar.jpg';
    }
    else if(this.imgType == 'logo'){
      this.imgSrc = '../../../../assets/images/utilities/logo-placeholder.jpg';
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
