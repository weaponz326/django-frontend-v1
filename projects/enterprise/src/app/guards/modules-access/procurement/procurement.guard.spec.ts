import { TestBed } from '@angular/core/testing';

import { ProcurementGuard } from './procurement.guard';

describe('ProcurementGuard', () => {
  let guard: ProcurementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProcurementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
