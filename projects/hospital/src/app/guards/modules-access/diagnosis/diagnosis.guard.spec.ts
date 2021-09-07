import { TestBed } from '@angular/core/testing';

import { DiagnosisGuard } from './diagnosis.guard';

describe('DiagnosisGuard', () => {
  let guard: DiagnosisGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DiagnosisGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
