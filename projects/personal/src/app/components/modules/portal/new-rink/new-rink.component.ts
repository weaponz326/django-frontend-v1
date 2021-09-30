import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component';

import { SelectAppointmentComponent } from '../../../select-windows/calendar-windows/select-appointment/select-appointment.component';
import { SelectNoteComponent } from '../../../select-windows/notes-windows/select-note/select-note.component';
import { SelectTaskComponent } from '../../../select-windows/tasks-windows/select-task/select-task.component';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('nameInputReference', { read: InputComponent, static: false }) nameInput!: InputComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;
  @ViewChild('typeDropDownListReference', { read: InputComponent, static: false }) typeDropDownList!: InputComponent;
  @ViewChild('sourceInputReference', { read: InputComponent, static: false }) sourceInput!: InputComponent;
  @ViewChild('sourceButtonReference', { read: ButtonComponent, static: false }) sourceButton!: ButtonComponent;
  @ViewChild('commentTextAreaReference', { read: MultilineTextBoxComponent, static: false }) commentTextArea!: MultilineTextBoxComponent;
  @ViewChild('sendButtonReference', { read: ButtonComponent, static: false }) sendButton!: ButtonComponent;
  @ViewChild('cancelButtonReference', { read: ButtonComponent, static: false }) cancelButton!: ButtonComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;
  @ViewChild('selectAppointmentComponentReference', { read: SelectAppointmentComponent, static: false }) selectAppointment!: SelectAppointmentComponent;
  @ViewChild('selectNoteComponentReference', { read: SelectNoteComponent, static: false }) selectNote!: SelectNoteComponent;
  @ViewChild('selectTaskComponentReference', { read: SelectTaskComponent, static: false }) selectTask!: SelectTaskComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  typeSource: any[] = ['Appointment', 'Note', 'Task'];
  selectedSourceId: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.portalApi.getDetail(String(sessionStorage.getItem('personalSearchUser')))
      .subscribe(
        res => {
          console.log(res);
          this.nameInput.value = res.first_name + " " + res.last_name;
          this.locationInput.value = res.location;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  sendRink(){
    let rinkData = {
      sender: localStorage.getItem('personal_id'),
      recipient: sessionStorage.getItem('personal_rink_recipient'),
      rink_type: this.typeDropDownList.value,
      rink_source: this.selectedSourceId,
      comment: this.commentTextArea.value
    }

    console.log(rinkData);
    this.sendButton.disabled = true;

    this.portalApi.postRink(rinkData)
      .subscribe(
        res => {
          console.log(res);
          this.sendButton.disabled = false;

          if (res.message == "OK"){
            sessionStorage.setItem('personal_rink_id', res.data.id);
            this.router.navigateByUrl('/home/portal/view-rink');
          }
        },
        err => {
          console.log(err);
          this.sendButton.disabled = false;
          this.connectionPrompt.toast.open();
        }
      )
  }

  onTypeSelected(event: any){
    this.sourceButton.disabled = false;
    this.sourceInput.value = "";
  }

  openSourceWindow(){
    let type = this.typeDropDownList.value;

    if (type == "Task") {
      console.log("u are opening task source window");
      this.selectTask.window.open();
    }else if (type == "Appointment") {
      console.log("u are opening appointment source window");
      this.selectAppointment.window.open();
    }else if (type == "Note") {
      console.log("u are opening note source window");
      this.selectNote.window.open();
    }
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.typeDropDownList.value;

    if (type == "Task") {
      this.selectedSourceId = sourceData.id;
      this.sourceInput.value = sourceData.task_name;
    }else if (type == "Appointment") {
      this.selectedSourceId = sourceData.id;
      this.sourceInput.value = sourceData.label;
    }else if (type == "Note") {
      this.selectedSourceId = sourceData.id;
      this.sourceInput.value = sourceData.subject;
    }
  }

}
