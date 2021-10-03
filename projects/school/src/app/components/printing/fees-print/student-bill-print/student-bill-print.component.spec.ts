import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBillPrintComponent } from './student-bill-print.component';

describe('StudentBillPrintComponent', () => {
  let component: StudentBillPrintComponent;
  let fixture: ComponentFixture<StudentBillPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBillPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBillPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
