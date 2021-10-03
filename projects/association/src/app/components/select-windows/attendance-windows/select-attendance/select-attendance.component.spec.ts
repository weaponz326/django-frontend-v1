import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAttendanceComponent } from './select-attendance.component';

describe('SelectAttendanceComponent', () => {
  let component: SelectAttendanceComponent;
  let fixture: ComponentFixture<SelectAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
