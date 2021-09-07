import { TestBed } from '@angular/core/testing';

import { WardsGuard } from './wards.guard';

describe('WardsGuard', () => {
  let guard: WardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
