import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllNotesComponent } from './print-all-notes.component';

describe('PrintAllNotesComponent', () => {
  let component: PrintAllNotesComponent;
  let fixture: ComponentFixture<PrintAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
