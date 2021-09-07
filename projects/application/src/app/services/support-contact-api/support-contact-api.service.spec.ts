import { TestBed } from '@angular/core/testing';

import { SupportContactApiService } from './support-contact-api.service';

describe('SupportContactApiService', () => {
  let service: SupportContactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportContactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
