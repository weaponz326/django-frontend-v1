import { TestBed } from '@angular/core/testing';

import { PaymentsPrintService } from './payments-print.service';

describe('PaymentsPrintService', () => {
  let service: PaymentsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
