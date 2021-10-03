import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStaffPrintComponent } from './all-staff-print.component';

describe('AllStaffPrintComponent', () => {
  let component: AllStaffPrintComponent;
  let fixture: ComponentFixture<AllStaffPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStaffPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStaffPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
