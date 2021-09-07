import { TestBed } from '@angular/core/testing';

import { DrugsGuard } from './drugs.guard';

describe('DrugsGuard', () => {
  let guard: DrugsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DrugsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
