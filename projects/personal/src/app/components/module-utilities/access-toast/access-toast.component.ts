import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-access-toast',
  templateUrl: './access-toast.component.html',
  styleUrls: ['./access-toast.component.scss']
})
export class AccessToastComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  ngOnInit(): void {
  }

  openToast(){
    this.buttonElement.nativeElement.click();
  }

}
