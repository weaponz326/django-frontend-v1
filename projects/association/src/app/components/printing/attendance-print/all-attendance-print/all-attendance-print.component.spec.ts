import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendancePrintComponent } from './all-attendance-print.component';

describe('AllAttendancePrintComponent', () => {
  let component: AllAttendancePrintComponent;
  let fixture: ComponentFixture<AllAttendancePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAttendancePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAttendancePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
