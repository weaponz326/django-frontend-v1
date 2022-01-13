import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCalendarComponent } from './select-calendar.component';

describe('SelectCalendarComponent', () => {
  let component: SelectCalendarComponent;
  let fixture: ComponentFixture<SelectCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
