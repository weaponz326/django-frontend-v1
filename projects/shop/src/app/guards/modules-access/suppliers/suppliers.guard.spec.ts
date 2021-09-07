import { TestBed } from '@angular/core/testing';

import { SuppliersGuard } from './suppliers.guard';

describe('SuppliersGuard', () => {
  let guard: SuppliersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuppliersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
