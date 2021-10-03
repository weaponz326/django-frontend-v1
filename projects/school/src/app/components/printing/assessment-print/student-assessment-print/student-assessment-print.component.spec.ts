import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssessmentPrintComponent } from './student-assessment-print.component';

describe('StudentAssessmentPrintComponent', () => {
  let component: StudentAssessmentPrintComponent;
  let fixture: ComponentFixture<StudentAssessmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssessmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssessmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
