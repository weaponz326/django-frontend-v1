import { TestBed } from '@angular/core/testing';

import { ViewAccountGuard } from './view-account.guard';

describe('ViewAccountGuard', () => {
  let guard: ViewAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
