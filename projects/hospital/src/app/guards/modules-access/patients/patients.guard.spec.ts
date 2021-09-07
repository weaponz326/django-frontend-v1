import { TestBed } from '@angular/core/testing';

import { PatientsGuard } from './patients.guard';

describe('PatientsGuard', () => {
  let guard: PatientsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
