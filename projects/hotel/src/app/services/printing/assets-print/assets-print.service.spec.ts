import { TestBed } from '@angular/core/testing';

import { AssetsPrintService } from './assets-print.service';

describe('AssetsPrintService', () => {
  let service: AssetsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
