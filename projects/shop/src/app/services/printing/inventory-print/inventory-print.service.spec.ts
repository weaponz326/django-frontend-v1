import { TestBed } from '@angular/core/testing';

import { InventoryPrintService } from './inventory-print.service';

describe('InventoryPrintService', () => {
  let service: InventoryPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
