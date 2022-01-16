import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-reservation',
  templateUrl: './select-reservation.component.html',
  styleUrls: ['./select-reservation.component.scss']
})
export class SelectReservationComponent implements OnInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @Output() rowSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  getReservations(){
    this.reservationsApi.getReservations()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(event: any){
    this.rowSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getReservations(),
        dataFields:[
          'id: string',
          'reservation_code: string',
          'reservation_date: string',
          'customer_name: string',
          'reservation_status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Reservation ID", dataField: "reservation_code", width: "20%" },
      { label: "Reservation Date", dataField: "reservation_date", width: "20%" },
      { label: "Customer Name", dataField: "customer_name", width: "40%" },
      { label: "Reservation Status", dataField: "reservation_status", width: "20%" },
    ]
  }

}
