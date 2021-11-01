import { TestBed } from '@angular/core/testing';

import { ExecutivesPrintService } from './executives-print.service';

describe('ExecutivesPrintService', () => {
  let service: ExecutivesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecutivesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
