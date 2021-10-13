import { Component, EventEmitter, ViewChild, OnInit, Output } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor() { }

  @Output() confirmEvent = new EventEmitter<string>();

  @ViewChild('windowReference', { read: WindowComponent, static: false }) window!: WindowComponent;

  ngOnInit(): void {
  }

  onClose(event: any) {
    console.log(event);

    this.confirmEvent.emit(event.detail.confirm);
  }

}
