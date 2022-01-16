import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
  ];

  searchFilterValues: any[] = ['All', 'Personal', 'School'];

  searchInput = '';
  searchFilter = 'School';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery: any;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('restaurantSearchInput'));

    if(sessionStorage.getItem('restaurantSearchInput')){
      this.searchInput = String(sessionStorage.getItem('restaurantSearchInput') || '');
      this.searchFilter = String(sessionStorage.getItem('restaurantSearchFilter') || 'School');
      this.searchQuery = sessionStorage.getItem('restaurantSearchInput');

      this.doSearch();
    }
  }

  doSearch(){
    // put search input in url
    this.router.navigate(['/home/portal/search', { input: this.searchInput, filter: this.searchFilter }]);

    sessionStorage.setItem('restaurantSearchInput', this.searchInput);
    sessionStorage.setItem('restaurantSearchFilter', this.searchFilter);
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
          this.connectionToast.openToast();
        }
      )
  }

  gotoSearchDetail(userId: any){
    sessionStorage.setItem('restaurantSearchUser', userId);

    this.portalApi.getDetail(String(sessionStorage.getItem('restaurantSearchUser')))
      .subscribe(
        res => {
          console.log(res);
          this.searchDetail = res;

          this.isSearchResultsReady = false;
          this.isSearchDetailReady = true;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
