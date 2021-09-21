import { Component, OnInit, ViewChild } from '@angular/core';

import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor() { }

  @ViewChild("#adminTooltipReference", { read: TooltipComponent, static: false }) adminTooltip!: TooltipComponent;
  @ViewChild("#billsTooltipReference", { read: TooltipComponent, static: false }) billsTooltip!: TooltipComponent;
  @ViewChild("#staffTooltipReference", { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild("#guestsTooltipReference", { read: TooltipComponent, static: false }) guestsTooltip!: TooltipComponent;
  @ViewChild("#paymentsTooltipReference", { read: TooltipComponent, static: false }) paymentsTooltip!: TooltipComponent;
  @ViewChild("#servicesTooltipReference", { read: TooltipComponent, static: false }) servicesTooltip!: TooltipComponent;
  @ViewChild("#checkInTooltipReference", { read: TooltipComponent, static: false }) checkInTooltip!: TooltipComponent;
  @ViewChild("#bookingsTooltipReference", { read: TooltipComponent, static: false }) bookingsTooltip!: TooltipComponent;
  @ViewChild("#roomsTooltipReference", { read: TooltipComponent, static: false }) roomsTooltip!: TooltipComponent;
  @ViewChild("#assetsTooltipReference", { read: TooltipComponent, static: false }) assetsTooltip!: TooltipComponent;
  @ViewChild("#housekeepingTooltipReference", { read: TooltipComponent, static: false }) housekeepingTooltip!: TooltipComponent;
  @ViewChild("#rosterTooltipReference", { read: TooltipComponent, static: false }) rosterTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
