import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousekeepingPrintComponent } from './view-housekeeping-print.component';

describe('ViewHousekeepingPrintComponent', () => {
  let component: ViewHousekeepingPrintComponent;
  let fixture: ComponentFixture<ViewHousekeepingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHousekeepingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHousekeepingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
