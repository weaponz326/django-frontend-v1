import { TestBed } from '@angular/core/testing';

import { ReceivablesPrintService } from './receivables-print.service';

describe('ReceivablesPrintService', () => {
  let service: ReceivablesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivablesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
