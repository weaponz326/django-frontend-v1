import { TestBed } from '@angular/core/testing';

import { SittingsGuard } from './sittings.guard';

describe('SittingsGuard', () => {
  let guard: SittingsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SittingsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
