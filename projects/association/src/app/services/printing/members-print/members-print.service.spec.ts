import { TestBed } from '@angular/core/testing';

import { MembersPrintService } from './members-print.service';

describe('MembersPrintService', () => {
  let service: MembersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
