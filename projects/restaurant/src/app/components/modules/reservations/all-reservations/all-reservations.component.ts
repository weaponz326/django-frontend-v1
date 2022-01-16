import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss']
})
export class AllReservationsComponent implements OnInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @ViewChild('newMenuReservationButtonReference', { read: ButtonComponent, static: false }) newReservationButton!: ButtonComponent;
  @ViewChild('reservationsGridReference', { read: GridComponent, static: false }) reservationsGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

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
          'arrival_date: string',
          'reservation_status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Reservation ID", dataField: "reservation_code", width: "15%" },
      { label: "Reservation Date", dataField: "reservation_date", width: "15%" },
      { label: "Customer Name", dataField: "customer_name", width: "35%" },
      { label: "Arrival Date", dataField: "arrival_date", width: "15%" },
      { label: "Reservation Status", dataField: "reservation_status", width: "20%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
