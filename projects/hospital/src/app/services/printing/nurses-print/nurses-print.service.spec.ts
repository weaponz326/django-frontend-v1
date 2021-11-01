import { TestBed } from '@angular/core/testing';

import { NursesPrintService } from './nurses-print.service';

describe('NursesPrintService', () => {
  let service: NursesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
