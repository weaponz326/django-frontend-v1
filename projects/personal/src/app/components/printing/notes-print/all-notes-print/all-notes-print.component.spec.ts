import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotesPrintComponent } from './all-notes-print.component';

describe('AllNotesPrintComponent', () => {
  let component: AllNotesPrintComponent;
  let fixture: ComponentFixture<AllNotesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNotesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNotesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
