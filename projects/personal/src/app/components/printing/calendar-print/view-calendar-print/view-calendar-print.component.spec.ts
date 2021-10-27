import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalendarPrintComponent } from './view-calendar-print.component';

describe('ViewCalendarPrintComponent', () => {
  let component: ViewCalendarPrintComponent;
  let fixture: ComponentFixture<ViewCalendarPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalendarPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalendarPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
