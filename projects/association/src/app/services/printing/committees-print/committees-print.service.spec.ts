import { TestBed } from '@angular/core/testing';

import { CommitteesPrintService } from './committees-print.service';

describe('CommitteesPrintService', () => {
  let service: CommitteesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
