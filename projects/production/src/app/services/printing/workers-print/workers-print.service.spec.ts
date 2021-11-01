import { TestBed } from '@angular/core/testing';

import { WorkersPrintService } from './workers-print.service';

describe('WorkersPrintService', () => {
  let service: WorkersPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
