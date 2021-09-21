import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  navHeading: any[] = [
    { text: "Settings", url: "/home/settings/dashboard" },
  ];

  ngOnInit(): void {
  }

}
