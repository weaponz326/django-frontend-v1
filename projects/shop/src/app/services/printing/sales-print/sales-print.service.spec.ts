import { TestBed } from '@angular/core/testing';

import { SalesPrintService } from './sales-print.service';

describe('SalesPrintService', () => {
  let service: SalesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
