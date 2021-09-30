import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintViewNoteComponent } from './print-view-note.component';

describe('PrintViewNoteComponent', () => {
  let component: PrintViewNoteComponent;
  let fixture: ComponentFixture<PrintViewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintViewNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintViewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
