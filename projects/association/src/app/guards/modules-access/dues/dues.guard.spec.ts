import { TestBed } from '@angular/core/testing';

import { DuesGuard } from './dues.guard';

describe('DuesGuard', () => {
  let guard: DuesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DuesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
