import { TestBed } from '@angular/core/testing';

import { PurchasingPrintService } from './purchasing-print.service';

describe('PurchasingPrintService', () => {
  let service: PurchasingPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasingPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
