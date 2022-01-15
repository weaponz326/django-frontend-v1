import { TestBed } from '@angular/core/testing';

import { SendRinkGuard } from './send-rink.guard';

describe('SendRinkGuard', () => {
  let guard: SendRinkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SendRinkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
