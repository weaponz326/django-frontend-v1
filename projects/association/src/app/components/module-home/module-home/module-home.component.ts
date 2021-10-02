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
  @ViewChild("#accountsTooltipReference", { read: TooltipComponent, static: false }) accountsTooltip!: TooltipComponent;
  @ViewChild("#membersTooltipReference", { read: TooltipComponent, static: false }) membersTooltip!: TooltipComponent;
  @ViewChild("#committeesTooltipReference", { read: TooltipComponent, static: false }) committeesTooltip!: TooltipComponent;
  @ViewChild("#duesTooltipReference", { read: TooltipComponent, static: false }) duesTooltip!: TooltipComponent;
  @ViewChild("#executivesTooltipReference", { read: TooltipComponent, static: false }) executivesTooltip!: TooltipComponent;
  @ViewChild("#actionPlanTooltipReference", { read: TooltipComponent, static: false }) actionPlanTooltip!: TooltipComponent;
  @ViewChild("#attendanceTooltipReference", { read: TooltipComponent, static: false }) attendanceTooltip!: TooltipComponent;
  @ViewChild("#meetingsTooltipReference", { read: TooltipComponent, static: false }) meetingsTooltip!: TooltipComponent;
  @ViewChild("#groupsTooltipReference", { read: TooltipComponent, static: false }) groupsTooltip!: TooltipComponent;
  @ViewChild("#yearTooltipReference", { read: TooltipComponent, static: false }) yearTooltip!: TooltipComponent;
  @ViewChild("#portaTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
