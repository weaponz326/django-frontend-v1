import { TestBed } from '@angular/core/testing';

import { ExecutivesGuard } from './executives.guard';

describe('ExecutivesGuard', () => {
  let guard: ExecutivesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExecutivesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
