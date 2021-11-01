import { TestBed } from '@angular/core/testing';

import { GroupsPrintService } from './groups-print.service';

describe('GroupsPrintService', () => {
  let service: GroupsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
