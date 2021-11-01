import { TestBed } from '@angular/core/testing';

import { PayablesPrintService } from './payables-print.service';

describe('PayablesPrintService', () => {
  let service: PayablesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayablesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
