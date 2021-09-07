import { TestBed } from '@angular/core/testing';

import { AccountsGuard } from './accounts.guard';

describe('AccountsGuard', () => {
  let guard: AccountsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
