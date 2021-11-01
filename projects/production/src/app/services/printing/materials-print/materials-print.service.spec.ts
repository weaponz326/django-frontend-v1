import { TestBed } from '@angular/core/testing';

import { MaterialsPrintService } from './materials-print.service';

describe('MaterialsPrintService', () => {
  let service: MaterialsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
