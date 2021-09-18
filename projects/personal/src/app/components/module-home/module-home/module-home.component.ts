import { Component, OnInit, ViewChild } from '@angular/core';

import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor() { }

  @ViewChild('portalTooltipReference', { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild('settingsTooltipReference', { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;
  @ViewChild('calendarTooltipReference', { read: TooltipComponent, static: false }) calendarTooltip!: TooltipComponent;
  @ViewChild('budgetsTooltipReference', { read: TooltipComponent, static: false }) budgetsTooltip!: TooltipComponent;
  @ViewChild('notesTooltipReference', { read: TooltipComponent, static: false }) notesTooltip!: TooltipComponent;
  @ViewChild('accountsTooltipReference', { read: TooltipComponent, static: false }) accountsTooltip!: TooltipComponent;
  @ViewChild('tasksTooltipReference', { read: TooltipComponent, static: false }) tasksTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
