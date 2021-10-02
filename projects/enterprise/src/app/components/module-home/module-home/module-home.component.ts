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
  @ViewChild("#payrollTooltipReference", { read: TooltipComponent, static: false }) payrollTooltip!: TooltipComponent;
  @ViewChild("#attendanceTooltipReference", { read: TooltipComponent, static: false }) attendanceTooltip!: TooltipComponent;
  @ViewChild("#assetsTooltipReference", { read: TooltipComponent, static: false }) assetsTooltip!: TooltipComponent;
  @ViewChild("#leaveTooltipReference", { read: TooltipComponent, static: false }) leaveTooltip!: TooltipComponent;
  @ViewChild("#budgetTooltipReference", { read: TooltipComponent, static: false }) budgetTooltip!: TooltipComponent;
  @ViewChild("#procurementTooltipReference", { read: TooltipComponent, static: false }) procurementTooltip!: TooltipComponent;
  @ViewChild("#lettersTooltipReference", { read: TooltipComponent, static: false }) lettersTooltip!: TooltipComponent;
  @ViewChild("#appraisalTooltipReference", { read: TooltipComponent, static: false }) appraisalTooltip!: TooltipComponent;
  @ViewChild("#filesTooltipReference", { read: TooltipComponent, static: false }) filesTooltip!: TooltipComponent;
  @ViewChild("#employeesTooltipReference", { read: TooltipComponent, static: false }) employeesTooltip!: TooltipComponent;
  @ViewChild("#ledgerTooltipReference", { read: TooltipComponent, static: false }) ledgerTooltip!: TooltipComponent;
  @ViewChild("#receptionTooltipReference", { read: TooltipComponent, static: false }) receptionTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;
  @ViewChild("#yearTooltipReference", { read: TooltipComponent, static: false }) yearTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
