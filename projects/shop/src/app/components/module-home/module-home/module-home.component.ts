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
  @ViewChild("#receivablesTooltipReference", { read: TooltipComponent, static: false }) receivablesTooltip!: TooltipComponent;
  @ViewChild("#productsTooltipReference", { read: TooltipComponent, static: false }) productsTooltip!: TooltipComponent;
  @ViewChild("#invoiceTooltipReference", { read: TooltipComponent, static: false }) invoiceTooltip!: TooltipComponent;
  @ViewChild("#markettingTooltipReference", { read: TooltipComponent, static: false }) markettingTooltip!: TooltipComponent;
  @ViewChild("#payablesTooltipReference", { read: TooltipComponent, static: false }) payablesTooltip!: TooltipComponent;
  @ViewChild("#salesTooltipReference", { read: TooltipComponent, static: false }) salesTooltip!: TooltipComponent;
  @ViewChild("#customersTooltipReference", { read: TooltipComponent, static: false }) customersTooltip!: TooltipComponent;
  @ViewChild("#paymentsTooltipReference", { read: TooltipComponent, static: false }) paymentsTooltip!: TooltipComponent;
  @ViewChild("#ordersTooltipReference", { read: TooltipComponent, static: false }) ordersTooltip!: TooltipComponent;
  @ViewChild("#inventoryTooltipReference", { read: TooltipComponent, static: false }) inventoryTooltip!: TooltipComponent;
  @ViewChild("#suppliersTooltipReference", { read: TooltipComponent, static: false }) suppliersTooltip!: TooltipComponent;
  @ViewChild("#purchasingTooltipReference", { read: TooltipComponent, static: false }) purchasingTooltip!: TooltipComponent;
  @ViewChild("#cashflowTooltipReference", { read: TooltipComponent, static: false }) cashflowTooltip!: TooltipComponent;
  @ViewChild("#staffTooltipReference", { read: TooltipComponent, static: false }) staffTooltip!: TooltipComponent;
  @ViewChild("#rosterTooltipReference", { read: TooltipComponent, static: false }) rosterTooltip!: TooltipComponent;
  @ViewChild("#portalTooltipReference", { read: TooltipComponent, static: false }) portalTooltip!: TooltipComponent;
  @ViewChild("#settingsTooltipReference", { read: TooltipComponent, static: false }) settingsTooltip!: TooltipComponent;

  ngOnInit(): void {
  }

}
