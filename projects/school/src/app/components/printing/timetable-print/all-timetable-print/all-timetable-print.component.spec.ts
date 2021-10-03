import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimetablePrintComponent } from './all-timetable-print.component';

describe('AllTimetablePrintComponent', () => {
  let component: AllTimetablePrintComponent;
  let fixture: ComponentFixture<AllTimetablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTimetablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimetablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
