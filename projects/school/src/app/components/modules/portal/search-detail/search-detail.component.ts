import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { environment } from 'projects/school/src/environments/environment';
import { PortalApiService } from 'projects/school/src/app/services/modules/portal-api/portal-api.service';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService
  ) { }

  @Input() searchDetail: any;

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;

  schoolUrl = environment.schoolUrl;

  ngOnInit(): void {
  }

  createRink(){
    console.log(this.searchDetail.id);
    sessionStorage.setItem('school_rink_recipient', this.searchDetail.id);
    this.router.navigateByUrl('home/portal/new-rink');
  }

}
