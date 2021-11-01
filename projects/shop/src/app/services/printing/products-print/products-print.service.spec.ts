import { TestBed } from '@angular/core/testing';

import { ProductsPrintService } from './products-print.service';

describe('ProductsPrintService', () => {
  let service: ProductsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
