import { TestBed } from '@angular/core/testing';

import { OrdersPrintService } from './orders-print.service';

describe('OrdersPrintService', () => {
  let service: OrdersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
