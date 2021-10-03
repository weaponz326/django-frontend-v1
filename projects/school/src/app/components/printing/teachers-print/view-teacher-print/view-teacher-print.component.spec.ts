import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherPrintComponent } from './view-teacher-print.component';

describe('ViewTeacherPrintComponent', () => {
  let component: ViewTeacherPrintComponent;
  let fixture: ComponentFixture<ViewTeacherPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTeacherPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
