import { TestBed } from '@angular/core/testing';

import { DeliveriesGuard } from './deliveries.guard';

describe('DeliveriesGuard', () => {
  let guard: DeliveriesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeliveriesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
