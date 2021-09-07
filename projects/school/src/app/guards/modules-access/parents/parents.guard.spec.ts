import { TestBed } from '@angular/core/testing';

import { ParentsGuard } from './parents.guard';

describe('ParentsGuard', () => {
  let guard: ParentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
