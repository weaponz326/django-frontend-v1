import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBudgetComponent } from './select-budget.component';

describe('SelectBudgetComponent', () => {
  let component: SelectBudgetComponent;
  let fixture: ComponentFixture<SelectBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
