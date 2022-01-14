import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-select-note',
  templateUrl: './select-note.component.html',
  styleUrls: ['./select-note.component.scss']
})
export class SelectNoteComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @Output() noteSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('subjectSortingComponentReference', { read: TableSortingComponent, static: false }) subjectSorting!: TableSortingComponent;
  @ViewChild('createdAtSortingComponentReference', { read: TableSortingComponent, static: false }) createdAtSorting!: TableSortingComponent;
  @ViewChild('updatedAtSortingComponentReference', { read: TableSortingComponent, static: false }) updatedAtSorting!: TableSortingComponent;

  notesGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getNotes(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getNotes(page: any, size: any, sortField: any){
    this.notesApi.getNotes(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.notesGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.noteSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

  sortTable(field: any){
    console.log(field);
    this.getNotes(1, 10, field);

    if((field == 'subject') || (field == "-subject")){
      this.createdAtSorting.resetSort();
      this.updatedAtSorting.resetSort();
    }
    else if((field == 'created_at') || (field == "-created_at")){
      this.subjectSorting.resetSort();
      this.updatedAtSorting.resetSort();
    }
    else if((field == 'updated_at') || (field == "-updated_at")){
      this.subjectSorting.resetSort();
      this.createdAtSorting.resetSort();
    }
  }

}
