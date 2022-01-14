import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  constructor() { }

  @Output() pageSelected = new EventEmitter<any>();
  @Input() currentPage = 0;
  @Input() totalPages = 0;

  ngOnInit(): void {
  }

  changePage(event: any, page: any){
    console.log(page);
    event.preventDefault();

    this.pageSelected.emit(page);
  }

}
