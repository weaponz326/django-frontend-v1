import { TestBed } from '@angular/core/testing';

import { BillsPrintService } from './bills-print.service';

describe('BillsPrintService', () => {
  let service: BillsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
