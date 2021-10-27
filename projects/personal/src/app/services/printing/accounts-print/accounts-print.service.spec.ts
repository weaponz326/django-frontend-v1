import { TestBed } from '@angular/core/testing';

import { AccountsPrintService } from './accounts-print.service';

describe('AccountsPrintService', () => {
  let service: AccountsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
