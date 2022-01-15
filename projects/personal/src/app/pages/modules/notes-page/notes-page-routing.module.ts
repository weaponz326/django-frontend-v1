import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesPageComponent } from './notes-page.component';
import { NewNoteComponent } from '../../../components/modules/notes/new-note/new-note.component';
import { ViewNoteComponent } from '../../../components/modules/notes/view-note/view-note.component';
import { AllNotesComponent } from '../../../components/modules/notes/all-notes/all-notes.component';
import { DashboardComponent } from '../../../components/modules/notes/dashboard/dashboard.component';

import { ViewNoteGuard } from '../../../guards/modules/notes/view-note.guard';


const routes: Routes = [
  {
    path: "",
    component: NotesPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "new-note", component: NewNoteComponent },
      { path: "view-note", component: ViewNoteComponent, canActivate: [ViewNoteGuard] },
      { path: "all-notes", component: AllNotesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesPageRoutingModule { }
