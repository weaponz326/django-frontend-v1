import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsPrintComponent } from './all-students-print.component';

describe('AllStudentsPrintComponent', () => {
  let component: AllStudentsPrintComponent;
  let fixture: ComponentFixture<AllStudentsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
