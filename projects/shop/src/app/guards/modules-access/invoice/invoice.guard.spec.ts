import { TestBed } from '@angular/core/testing';

import { InvoiceGuard } from './invoice.guard';

describe('InvoiceGuard', () => {
  let guard: InvoiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvoiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
