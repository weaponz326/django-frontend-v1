import { Component, OnInit, ViewChild } from '@angular/core';

import { WindowComponent, Window } from 'smart-webcomponents-angular/window';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.scss']
})
export class NewBudgetComponent implements OnInit {

  constructor() { }

  @ViewChild('windowReference') window!: WindowComponent;
  @ViewChild('inputReference') input!: InputComponent;
  @ViewChild('dropDownListReference') dropDownList!: DropDownListComponent;

  @ViewChild('connectionPromptComponentReference') connectionPrompt!: ConnectionPromptComponent;

  ngOnInit(): void {
  }

}
