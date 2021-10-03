import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectPrintComponent } from './view-subject-print.component';

describe('ViewSubjectPrintComponent', () => {
  let component: ViewSubjectPrintComponent;
  let fixture: ComponentFixture<ViewSubjectPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubjectPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
