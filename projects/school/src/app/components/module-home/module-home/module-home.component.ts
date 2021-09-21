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
  @ViewChild("#parentsTooltipReference", { read: TooltipComponent, static: false }) parentsTooltip!: TooltipComponent;
  @ViewChild("#assessmentTooltipReference", { read: TooltipComponent, static: false }) assessmentTooltip!: TooltipComponent;
  @ViewChild("#subjectsTooltipReference", { read: TooltipComponent, static: false }) subjectsTooltip!: TooltipComponent;
  @ViewChild("#attendanceTooltipReference", { read: TooltipComponent, static: false }) attendanceTooltip!: TooltipComponent;
  @ViewChild("#studentsTooltipReference", { read: TooltipComponent, static: false }) studentsTooltip!: TooltipComponent;
  @ViewChild("#reportsTooltipReference", { read: TooltipComponent, static: false }) reportsTooltip!: TooltipComponent;
  @ViewChild("#teachersTooltipReference", { read: TooltipComponent, static: false }) teachersTooltip!: TooltipComponent;
  @ViewChild("#staffTooltipReference", { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild("#paymentsTooltipReference", { read: TooltipComponent, static: false }) paymentsTooltip!: TooltipComponent;
  @ViewChild("#classesTooltipReference", { read: TooltipComponent, static: false }) classesTooltip!: TooltipComponent;
  @ViewChild("#timetablesTooltipReference", { read: TooltipComponent, static: false }) timetablesTooltip!: TooltipComponent;
  @ViewChild("#feesTooltipReference", { read: TooltipComponent, static: false }) feesTooltip!: TooltipComponent;
  @ViewChild("#sectionsTooltipReference", { read: TooltipComponent, static: false }) sectionsTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;
  
  ngOnInit(): void {
  }

}
