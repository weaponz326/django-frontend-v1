import { TestBed } from '@angular/core/testing';

import { PrescriptionsGuard } from './prescriptions.guard';

describe('PrescriptionsGuard', () => {
  let guard: PrescriptionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrescriptionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
