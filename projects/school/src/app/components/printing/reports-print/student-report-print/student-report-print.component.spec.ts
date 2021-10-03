import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReportPrintComponent } from './student-report-print.component';

describe('StudentReportPrintComponent', () => {
  let component: StudentReportPrintComponent;
  let fixture: ComponentFixture<StudentReportPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentReportPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
