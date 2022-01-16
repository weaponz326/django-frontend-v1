import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Invitation", url: "/home/admin/search" },
  ];

  searchInput = '';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery: any;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('schoolAdminSearchInput'));

    if(sessionStorage.getItem('schoolAdminSearchInput')){
      this.searchQuery = sessionStorage.getItem('schoolAdminSearchInput');
      this.doSearch();
    }
  }

  doSearch(){
    // put search input in url
    this.router.navigate(['/home/admin/search/', { input: this.searchInput }]);

    sessionStorage.setItem('schoolAdminSearchInput', this.searchInput);
    this.searchQuery = this.searchInput;

    this.getSearch();
  }

  getSearch(){
    this.adminApi.getSearch(this.searchInput)
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

  getDetail(){
    this.adminApi.getDetail(String(sessionStorage.getItem('schoolAdminSearchUser')))
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

  sendInvitation() {
    let data = {
      account: localStorage.getItem('school_id'),
      invitee_id: this.searchDetail.id,
      invitee_name: this.searchDetail.first_name + " " + this.searchDetail.last_name,
      invitation_status: 'Awaiting',
    }

    console.log(data);

    this.adminApi.sendInvitation(data)
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('school_invitation_id', res.data.id);
          this.router.navigateByUrl('/home/admin/view-invitation');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  gotoSearchDetail(userId: any){
    sessionStorage.setItem('schoolAdminSearchUser', userId);
    this.getDetail();
  }

}
