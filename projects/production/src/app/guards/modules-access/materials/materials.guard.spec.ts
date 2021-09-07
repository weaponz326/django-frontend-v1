import { TestBed } from '@angular/core/testing';

import { MaterialsGuard } from './materials.guard';

describe('MaterialsGuard', () => {
  let guard: MaterialsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaterialsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
