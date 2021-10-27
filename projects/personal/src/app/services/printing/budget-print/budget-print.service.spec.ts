import { TestBed } from '@angular/core/testing';

import { BudgetPrintService } from './budget-print.service';

describe('BudgetPrintService', () => {
  let service: BudgetPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
