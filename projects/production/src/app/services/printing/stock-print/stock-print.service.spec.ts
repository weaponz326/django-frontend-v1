import { TestBed } from '@angular/core/testing';

import { StockPrintService } from './stock-print.service';

describe('StockPrintService', () => {
  let service: StockPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
