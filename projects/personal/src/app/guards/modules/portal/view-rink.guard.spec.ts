import { TestBed } from '@angular/core/testing';

import { ViewRinkGuard } from './view-rink.guard';

describe('ViewRinkGuard', () => {
  let guard: ViewRinkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewRinkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
