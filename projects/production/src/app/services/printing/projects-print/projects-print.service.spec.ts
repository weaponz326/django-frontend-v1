import { TestBed } from '@angular/core/testing';

import { ProjectsPrintService } from './projects-print.service';

describe('ProjectsPrintService', () => {
  let service: ProjectsPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
