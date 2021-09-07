import { TestBed } from '@angular/core/testing';

import { LaboratoryGuard } from './laboratory.guard';

describe('LaboratoryGuard', () => {
  let guard: LaboratoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LaboratoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
