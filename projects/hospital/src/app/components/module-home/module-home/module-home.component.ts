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
  @ViewChild("#patientsTooltipReference", { read: TooltipComponent, static: false }) patientsTooltip!: TooltipComponent;
  @ViewChild("#appointmentsTooltipReference", { read: TooltipComponent, static: false }) appointmensTooltip!: TooltipComponent;
  @ViewChild("#staffTooltipReference", { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild("#billsTooltipReference", { read: TooltipComponent, static: false }) billsTooltip!: TooltipComponent;
  @ViewChild("#doctorsTooltipReference", { read: TooltipComponent, static: false }) doctorsTooltip!: TooltipComponent;
  @ViewChild("#laboratoryTooltipReference", { read: TooltipComponent, static: false }) laboratoryTooltip!: TooltipComponent;
  @ViewChild("#paymentsTooltipReference", { read: TooltipComponent, static: false }) paymentsTooltip!: TooltipComponent;
  @ViewChild("#nursesTooltipReference", { read: TooltipComponent, static: false }) nursesTooltip!: TooltipComponent;
  @ViewChild("#prescriptionsTooltipReference", { read: TooltipComponent, static: false }) prescriptionsTooltip!: TooltipComponent;
  @ViewChild("#diagnosisTooltipReference", { read: TooltipComponent, static: false }) diagnosisTooltip!: TooltipComponent;
  @ViewChild("#drugsTooltipReference", { read: TooltipComponent, static: false }) drugsTooltip!: TooltipComponent;
  @ViewChild("#wardsTooltipReference", { read: TooltipComponent, static: false }) wardsTooltip!: TooltipComponent;
  @ViewChild("#admissionsTooltipReference", { read: TooltipComponent, static: false }) admissionsTooltip!: TooltipComponent;
  @ViewChild("#dispensaryTooltipReference", { read: TooltipComponent, static: false }) dispensaryTooltip!: TooltipComponent;
  @ViewChild("#rosterTooltipReference", { read: TooltipComponent, static: false }) rosterTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
