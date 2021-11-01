import { TestBed } from '@angular/core/testing';

import { MenuPrintService } from './menu-print.service';

describe('MenuPrintService', () => {
  let service: MenuPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
