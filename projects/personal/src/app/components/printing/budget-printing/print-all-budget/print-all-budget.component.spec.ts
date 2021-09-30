import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllBudgetComponent } from './print-all-budget.component';

describe('PrintAllBudgetComponent', () => {
  let component: PrintAllBudgetComponent;
  let fixture: ComponentFixture<PrintAllBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAllBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
