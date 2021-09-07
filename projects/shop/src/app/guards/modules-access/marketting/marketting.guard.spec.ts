import { TestBed } from '@angular/core/testing';

import { MarkettingGuard } from './marketting.guard';

describe('MarkettingGuard', () => {
  let guard: MarkettingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarkettingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
