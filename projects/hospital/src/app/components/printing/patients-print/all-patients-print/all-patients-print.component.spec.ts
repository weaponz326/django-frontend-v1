import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientsPrintComponent } from './all-patients-print.component';

describe('AllPatientsPrintComponent', () => {
  let component: AllPatientsPrintComponent;
  let fixture: ComponentFixture<AllPatientsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPatientsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPatientsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
