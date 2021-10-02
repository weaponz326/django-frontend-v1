import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBudgetPrintComponent } from './all-budget-print.component';

describe('AllBudgetPrintComponent', () => {
  let component: AllBudgetPrintComponent;
  let fixture: ComponentFixture<AllBudgetPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBudgetPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBudgetPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
