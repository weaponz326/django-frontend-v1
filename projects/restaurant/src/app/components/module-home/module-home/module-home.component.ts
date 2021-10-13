import { Component, OnInit, ViewChild } from '@angular/core';

import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor() { }

  @ViewChild('adminTooltipReference', { read: TooltipComponent, static: false }) adminTooltip!: TooltipComponent;
  @ViewChild('portalTooltipReference', { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild('settingsTooltipReference', { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;
  @ViewChild('menuTooltipReference', { read: TooltipComponent, static: false }) menuTooltip!: TooltipComponent;
  @ViewChild('staffTooltipReference', { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild('tablesTooltipReference', { read: TooltipComponent, static: false }) tablesTooltip!: TooltipComponent;
  @ViewChild('customersTooltipReference', { read: TooltipComponent, static: false }) customersTooltip!: TooltipComponent;
  @ViewChild('deliveriesTooltipReference', { read: TooltipComponent, static: false }) deliveriesTooltip!: TooltipComponent;
  @ViewChild('paymentsTooltipReference', { read: TooltipComponent, static: false }) paymentsTooltip!: TooltipComponent;
  @ViewChild('rosterTooltipReference', { read: TooltipComponent, static: false }) rosterTooltip!: TooltipComponent;
  @ViewChild('reservationsTooltipReference', { read: TooltipComponent, static: false }) reservationsTooltip!: TooltipComponent;
  @ViewChild('ordersTooltipReference', { read: TooltipComponent, static: false }) ordersTooltip!: TooltipComponent;
  @ViewChild('kitchenStockTooltipReference', { read: TooltipComponent, static: false }) kitchenStockTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
