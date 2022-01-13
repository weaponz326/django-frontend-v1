import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScheduleComponent } from './select-schedule.component';

describe('SelectScheduleComponent', () => {
  let component: SelectScheduleComponent;
  let fixture: ComponentFixture<SelectScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
