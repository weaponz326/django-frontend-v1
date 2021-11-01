import { TestBed } from '@angular/core/testing';

import { ServicesPrintService } from './services-print.service';

describe('ServicesPrintService', () => {
  let service: ServicesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
