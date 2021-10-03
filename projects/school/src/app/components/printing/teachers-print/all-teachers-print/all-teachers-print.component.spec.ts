import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeachersPrintComponent } from './all-teachers-print.component';

describe('AllTeachersPrintComponent', () => {
  let component: AllTeachersPrintComponent;
  let fixture: ComponentFixture<AllTeachersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTeachersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTeachersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
