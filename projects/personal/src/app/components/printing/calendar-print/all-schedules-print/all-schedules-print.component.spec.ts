import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSchedulesPrintComponent } from './all-schedules-print.component';

describe('AllSchedulesPrintComponent', () => {
  let component: AllSchedulesPrintComponent;
  let fixture: ComponentFixture<AllSchedulesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSchedulesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSchedulesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
