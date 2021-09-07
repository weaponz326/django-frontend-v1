import { TestBed } from '@angular/core/testing';

import { AssetsGuard } from './assets.guard';

describe('AssetsGuard', () => {
  let guard: AssetsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssetsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
