import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-sorting',
  templateUrl: './table-sorting.component.html',
  styleUrls: ['./table-sorting.component.scss']
})
export class TableSortingComponent implements OnInit {

  constructor() { }

  @Input() sortField: string = "";
  @Output() sortDirection = new EventEmitter<string>();

  currentSort = "";

  ngOnInit(): void {
  }

  setSort(sort: any){
    if(sort == "down")
      this.currentSort = this.sortField;
    else if(sort == "up")
      this.currentSort = "-" + this.sortField;

    this.sortDirection.emit(this.currentSort);
  }

  resetSort(){
    this.currentSort = "";
  }

}

