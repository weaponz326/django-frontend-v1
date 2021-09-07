import { TestBed } from '@angular/core/testing';

import { MrkettingApiService } from './mrketting-api.service';

describe('MrkettingApiService', () => {
  let service: MrkettingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrkettingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
