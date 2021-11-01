import { TestBed } from '@angular/core/testing';

import { MarkettingPrintService } from './marketting-print.service';

describe('MarkettingPrintService', () => {
  let service: MarkettingPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkettingPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
