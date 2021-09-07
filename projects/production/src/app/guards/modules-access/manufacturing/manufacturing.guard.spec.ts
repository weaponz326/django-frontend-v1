import { TestBed } from '@angular/core/testing';

import { ManufacturingGuard } from './manufacturing.guard';

describe('ManufacturingGuard', () => {
  let guard: ManufacturingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManufacturingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
