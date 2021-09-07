import { TestBed } from '@angular/core/testing';

import { AdmissionsGuard } from './admissions.guard';

describe('AdmissionsGuard', () => {
  let guard: AdmissionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmissionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
