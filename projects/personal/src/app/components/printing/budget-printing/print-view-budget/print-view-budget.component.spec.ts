import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintViewBudgetComponent } from './print-view-budget.component';

describe('PrintViewBudgetComponent', () => {
  let component: PrintViewBudgetComponent;
  let fixture: ComponentFixture<PrintViewBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintViewBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintViewBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
