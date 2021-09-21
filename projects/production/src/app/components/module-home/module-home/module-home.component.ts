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
  @ViewChild("#stockTooltipReference", { read: TooltipComponent, static: false }) stockTooltip!: TooltipComponent;
  @ViewChild("#equipmentTooltipReference", { read: TooltipComponent, static: false }) equipmentTooltip!: TooltipComponent;
  @ViewChild("#purcahsingTooltipReference", { read: TooltipComponent, static: false }) purchasingTooltip!: TooltipComponent;
  @ViewChild("#ordersTooltipReference", { read: TooltipComponent, static: false }) ordersTooltip!: TooltipComponent;
  @ViewChild("#manufacturingTooltipReference", { read: TooltipComponent, static: false }) manufacturingTooltip!: TooltipComponent;
  @ViewChild("#contractorsTooltipReference", { read: TooltipComponent, static: false }) contractorsTooltip!: TooltipComponent;
  @ViewChild("#projectsTooltipReference", { read: TooltipComponent, static: false }) projectsTooltip!: TooltipComponent;
  @ViewChild("#workersTooltipReference", { read: TooltipComponent, static: false }) workersTooltip!: TooltipComponent;
  @ViewChild("#tasksTooltipReference", { read: TooltipComponent, static: false }) tasksTooltip!: TooltipComponent;
  @ViewChild("#productsTooltipReference", { read: TooltipComponent, static: false }) productsTooltip!: TooltipComponent;
  @ViewChild("#rosterTooltipReference", { read: TooltipComponent, static: false }) rosterTooltip!: TooltipComponent;
  @ViewChild("#materialsTooltipReference", { read: TooltipComponent, static: false }) materialsTooltip!: TooltipComponent;
  @ViewChild("#staffTooltipReference", { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
