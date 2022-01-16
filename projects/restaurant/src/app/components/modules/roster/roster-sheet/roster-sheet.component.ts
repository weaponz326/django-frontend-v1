import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-roster-sheet',
  templateUrl: './roster-sheet.component.html',
  styleUrls: ['./roster-sheet.component.scss']
})
export class RosterSheetComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('sheetGridReference', { read: GridComponent, static: false }) sheetGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  dataSource: any[] = [];
  editing = {}
  sheetColumns: GridColumn[] = <GridColumn[]>[];
  sheetDataFields: any = [];
  sheetEditDropDownSource: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshSheet();
    this.getBatches();
  }

  refreshSheet(){
    this.rosterApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getRosterDays();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  // for source of sheet custom cell edit widget
  getBatches(){
    this.rosterApi.getBatches()
      .subscribe(
        res => {
          console.log(res);

          this.sheetEditDropDownSource = [];

          res.forEach((batch: { batch_symbol: any; }) => {
            this.sheetEditDropDownSource.push(batch.batch_symbol);
          });
          console.log(this.sheetEditDropDownSource);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  // for populating columns
  getRosterDays(){
    this.rosterApi.getRosterDays()
      .subscribe(
        res => {
          console.log(res);
          this.setRosterColumns(res);

          this.getSheetShifts();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSheetShifts(){
    this.rosterApi.getShifts()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetShifts(res);
          this.getSheetBatches();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSheetBatches(){
    this.rosterApi.getRosterSheet()
      .subscribe(
        res => {
          console.log(res);
          // this.populateSheetBatches(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setRosterColumns(shiftDays: any){
    // set datafields
    this.sheetDataFields = [];
    this.sheetDataFields.push('id: string');
    this.sheetDataFields.push('shift_id: string');
    this.sheetDataFields.push('shift_name: string');

    // set columns
    this.sheetColumns = [];
    this.sheetColumns.push({ label: "Shift Name", dataField: "shift_name", width: "18%" });

    shiftDays.forEach((day: { id: any; day: any; }) => {
      // datafields
      this.sheetDataFields.push({ name: day.id, type: 'string' });

      // columns
      var dayColumn = { label: day.day, dataField: day.id, editable: "true", width: 100 };
      this.sheetColumns.push(dayColumn);
    });
  }

  populateSheetShifts(shiftData: any){
    shiftData.forEach((shift: { id: any; shift_name: any; }) => {
      let data = { id: shift.id, shift_id: shift.id, shift_name: shift.shift_name };
      this.dataSource.push(data);
    });

    console.log(this.dataSource);
  }

}
