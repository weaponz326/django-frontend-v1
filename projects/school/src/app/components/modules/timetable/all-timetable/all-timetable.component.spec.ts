import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimetableComponent } from './all-timetable.component';

describe('AllTimetableComponent', () => {
  let component: AllTimetableComponent;
  let fixture: ComponentFixture<AllTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
