import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActionPlanPrintComponent } from './all-action-plan-print.component';

describe('AllActionPlanPrintComponent', () => {
  let component: AllActionPlanPrintComponent;
  let fixture: ComponentFixture<AllActionPlanPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllActionPlanPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActionPlanPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
