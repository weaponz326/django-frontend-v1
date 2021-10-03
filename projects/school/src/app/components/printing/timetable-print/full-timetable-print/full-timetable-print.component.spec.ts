import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimetablePrintComponent } from './full-timetable-print.component';

describe('FullTimetablePrintComponent', () => {
  let component: FullTimetablePrintComponent;
  let fixture: ComponentFixture<FullTimetablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTimetablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimetablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
