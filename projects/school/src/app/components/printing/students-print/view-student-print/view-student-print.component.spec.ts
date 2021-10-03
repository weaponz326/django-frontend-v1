import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentPrintComponent } from './view-student-print.component';

describe('ViewStudentPrintComponent', () => {
  let component: ViewStudentPrintComponent;
  let fixture: ComponentFixture<ViewStudentPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
