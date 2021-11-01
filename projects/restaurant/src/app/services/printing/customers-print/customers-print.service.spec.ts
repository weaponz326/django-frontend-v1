import { TestBed } from '@angular/core/testing';

import { CustomersPrintService } from './customers-print.service';

describe('CustomersPrintService', () => {
  let service: CustomersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
