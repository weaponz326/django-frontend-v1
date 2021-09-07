import { TestBed } from '@angular/core/testing';

import { BudgetGuard } from './budget.guard';

describe('BudgetGuard', () => {
  let guard: BudgetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BudgetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
