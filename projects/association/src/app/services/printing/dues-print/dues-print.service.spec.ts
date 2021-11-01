import { TestBed } from '@angular/core/testing';

import { DuesPrintService } from './dues-print.service';

describe('DuesPrintService', () => {
  let service: DuesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
