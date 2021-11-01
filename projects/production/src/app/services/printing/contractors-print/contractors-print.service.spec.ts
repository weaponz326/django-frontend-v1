import { TestBed } from '@angular/core/testing';

import { ContractorsPrintService } from './contractors-print.service';

describe('ContractorsPrintService', () => {
  let service: ContractorsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractorsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
