import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendancePrintComponent } from './view-attendance-print.component';

describe('ViewAttendancePrintComponent', () => {
  let component: ViewAttendancePrintComponent;
  let fixture: ComponentFixture<ViewAttendancePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAttendancePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendancePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
