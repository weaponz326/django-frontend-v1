import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNoteComponent } from './select-note.component';

describe('SelectNoteComponent', () => {
  let component: SelectNoteComponent;
  let fixture: ComponentFixture<SelectNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
