import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssessmentPrintComponent } from './all-assessment-print.component';

describe('AllAssessmentPrintComponent', () => {
  let component: AllAssessmentPrintComponent;
  let fixture: ComponentFixture<AllAssessmentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAssessmentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAssessmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
