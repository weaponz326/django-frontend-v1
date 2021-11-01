import { TestBed } from '@angular/core/testing';

import { TasksPrintService } from './tasks-print.service';

describe('TasksPrintService', () => {
  let service: TasksPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
