import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppraisalPrintComponent } from './all-appraisal-print.component';

describe('AllAppraisalPrintComponent', () => {
  let component: AllAppraisalPrintComponent;
  let fixture: ComponentFixture<AllAppraisalPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppraisalPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppraisalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
