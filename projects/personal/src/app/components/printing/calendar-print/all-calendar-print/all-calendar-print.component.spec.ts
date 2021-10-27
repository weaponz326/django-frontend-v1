import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCalendarPrintComponent } from './all-calendar-print.component';

describe('AllCalendarPrintComponent', () => {
  let component: AllCalendarPrintComponent;
  let fixture: ComponentFixture<AllCalendarPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCalendarPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCalendarPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
