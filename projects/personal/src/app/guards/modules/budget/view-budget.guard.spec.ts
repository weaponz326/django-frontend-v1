import { TestBed } from '@angular/core/testing';

import { ViewBudgetGuard } from './view-budget.guard';

describe('ViewBudgetGuard', () => {
  let guard: ViewBudgetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewBudgetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
