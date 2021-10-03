import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAssessmentPrintComponent } from './class-assessment-print.component';

describe('ClassAssessmentPrintComponent', () => {
  let component: ClassAssessmentPrintComponent;
  let fixture: ComponentFixture<ClassAssessmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAssessmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAssessmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
