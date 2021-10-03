import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorsPrintComponent } from './all-doctors-print.component';

describe('AllDoctorsPrintComponent', () => {
  let component: AllDoctorsPrintComponent;
  let fixture: ComponentFixture<AllDoctorsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDoctorsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDoctorsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
