import { TestBed } from '@angular/core/testing';

import { KitchenStockPrintService } from './kitchen-stock-print.service';

describe('KitchenStockPrintService', () => {
  let service: KitchenStockPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenStockPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
