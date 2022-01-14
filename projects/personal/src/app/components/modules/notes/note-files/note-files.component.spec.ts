import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFilesComponent } from './note-files.component';

describe('NoteFilesComponent', () => {
  let component: NoteFilesComponent;
  let fixture: ComponentFixture<NoteFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
