import { TestBed } from '@angular/core/testing';

import { FeesPrintService } from './fees-print.service';

describe('FeesPrintService', () => {
  let service: FeesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
