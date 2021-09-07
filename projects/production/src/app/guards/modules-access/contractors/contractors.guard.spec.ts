import { TestBed } from '@angular/core/testing';

import { ContractorsGuard } from './contractors.guard';

describe('ContractorsGuard', () => {
  let guard: ContractorsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContractorsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
