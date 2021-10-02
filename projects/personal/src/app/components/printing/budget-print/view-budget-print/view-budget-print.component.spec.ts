import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBudgetPrintComponent } from './view-budget-print.component';

describe('ViewBudgetPrintComponent', () => {
  let component: ViewBudgetPrintComponent;
  let fixture: ComponentFixture<ViewBudgetPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBudgetPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBudgetPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
