import { TestBed } from '@angular/core/testing';

import { DeliveriesPrintService } from './deliveries-print.service';

describe('DeliveriesPrintService', () => {
  let service: DeliveriesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
