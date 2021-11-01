import { TestBed } from '@angular/core/testing';

import { FilesPrintService } from './files-print.service';

describe('FilesPrintService', () => {
  let service: FilesPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
