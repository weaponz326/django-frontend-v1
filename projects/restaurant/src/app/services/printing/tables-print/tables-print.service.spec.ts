import { TestBed } from '@angular/core/testing';

import { TablesPrintService } from './tables-print.service';

describe('TablesPrintService', () => {
  let service: TablesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
