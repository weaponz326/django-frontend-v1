import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCalendarsComponent } from './all-calendars.component';

describe('AllCalendarsComponent', () => {
  let component: AllCalendarsComponent;
  let fixture: ComponentFixture<AllCalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCalendarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
