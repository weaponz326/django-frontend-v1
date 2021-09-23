import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from 'projects/hotel/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService
  ) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
  ];

  searchFilterValues: any[] = ['All', 'Personal', 'Hotel'];

  searchInput = '';
  searchFilter = 'Hotel';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery: any;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('hotelSearchInput'));

    if(sessionStorage.getItem('hotelSearchInput')){
      this.searchInput = String(sessionStorage.getItem('hotelSearchInput') || '');
      this.searchFilter = String(sessionStorage.getItem('hotelSearchFilter') || 'Hotel');
      this.searchQuery = sessionStorage.getItem('hotelSearchInput');

      this.doSearch();
    }
  }

  doSearch(){
    // put search input in url
    this.router.navigate(['/home/portal/search', { input: this.searchInput, filter: this.searchFilter }]);

    sessionStorage.setItem('hotelSearchInput', this.searchInput);
    sessionStorage.setItem('hotelSearchFilter', this.searchFilter);
    this.searchQuery = this.searchInput;

    this.getSearch();
  }

  setSearchFilter(event: any, value: any){
    event.preventDefault();
    this.searchFilter = value;
  }

  getSearch(){
    this.portalApi.getSearch(this.searchInput, this.searchFilter)
      .subscribe(
        res => {
          console.log(res);
          this.searchResults = res;

          this.isSearchResultsReady = true;
          this.isSearchDetailReady = false;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  gotoSearchDetail(userId: any){
    sessionStorage.setItem('hotelSearchUser', userId);

    this.portalApi.getDetail(String(sessionStorage.getItem('hotelSearchUser')))
      .subscribe(
        res => {
          console.log(res);
          this.searchDetail = res;

          this.isSearchResultsReady = false;
          this.isSearchDetailReady = true;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

}
