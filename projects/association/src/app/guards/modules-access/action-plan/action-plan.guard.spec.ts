import { TestBed } from '@angular/core/testing';

import { ActionPlanGuard } from './action-plan.guard';

describe('ActionPlanGuard', () => {
  let guard: ActionPlanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActionPlanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
