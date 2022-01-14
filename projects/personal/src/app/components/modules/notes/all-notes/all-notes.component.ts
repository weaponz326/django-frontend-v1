import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { NotesPrintService } from 'projects/personal/src/app/services/printing/notes-print/notes-print.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
    private notesPrint: NotesPrintService
  ) { }

  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('subjectSortingComponentReference', { read: TableSortingComponent, static: false }) subjectSorting!: TableSortingComponent;
  @ViewChild('createdAtSortingComponentReference', { read: TableSortingComponent, static: false }) createdAtSorting!: TableSortingComponent;
  @ViewChild('updatedAtSortingComponentReference', { read: TableSortingComponent, static: false }) updatedAtSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
  ];

  notesGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getNotes(1, 50, "");
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
        }
      )
  }

  viewNote(id: any){
    console.log(id);
    sessionStorage.setItem('personal_note_id', id);

    this.router.navigateByUrl('/home/notes/view-note')
  }

  sortTable(field: any){
    console.log(field);
    this.getNotes(1, 50, field);

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

  onPrint(){
    console.log("lets start printing...");
    this.notesPrint.printAllNotes(this.notesGridData);
  }

}
