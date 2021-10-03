import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimetablePrintComponent } from './class-timetable-print.component';

describe('ClassTimetablePrintComponent', () => {
  let component: ClassTimetablePrintComponent;
  let fixture: ComponentFixture<ClassTimetablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimetablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimetablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
