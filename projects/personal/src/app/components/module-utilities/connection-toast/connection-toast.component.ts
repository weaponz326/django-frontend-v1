import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-connection-toast',
  templateUrl: './connection-toast.component.html',
  styleUrls: ['./connection-toast.component.scss']
})
export class ConnectionToastComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  ngOnInit(): void {
  }

  openToast(){
    this.buttonElement.nativeElement.click();
  }

}
