import { TestBed } from '@angular/core/testing';

import { SectionsGuard } from './sections.guard';

describe('SectionsGuard', () => {
  let guard: SectionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SectionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
