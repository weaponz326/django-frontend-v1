import { TestBed } from '@angular/core/testing';

import { ActionPlanPrintService } from './action-plan-print.service';

describe('ActionPlanPrintService', () => {
  let service: ActionPlanPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionPlanPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
