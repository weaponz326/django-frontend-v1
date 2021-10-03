import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestPrintComponent } from './view-guest-print.component';

describe('ViewGuestPrintComponent', () => {
  let component: ViewGuestPrintComponent;
  let fixture: ComponentFixture<ViewGuestPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuestPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
