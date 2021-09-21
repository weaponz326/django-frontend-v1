import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { environment } from 'projects/restaurant/src/environments/environment';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private portalApi: PortalApiService
  ) { }

  @Input() searchResults: any;
  @Input() searchQuery: any;
  @Output() viewDetailEvent = new EventEmitter<string>();

  restaurantUrl = environment.restaurantUrl;

  ngOnInit(): void {
  }

  viewDetail(userId: any){
    this.viewDetailEvent.emit(userId);
  }

}
