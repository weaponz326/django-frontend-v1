import { TestBed } from '@angular/core/testing';

import { SuppliersPrintService } from './suppliers-print.service';

describe('SuppliersPrintService', () => {
  let service: SuppliersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
