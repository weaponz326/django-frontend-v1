import { TestBed } from '@angular/core/testing';

import { DrugsPrintService } from './drugs-print.service';

describe('DrugsPrintService', () => {
  let service: DrugsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
