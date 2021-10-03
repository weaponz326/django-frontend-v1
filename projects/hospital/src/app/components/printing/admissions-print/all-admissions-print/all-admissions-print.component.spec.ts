import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdmissionsPrintComponent } from './all-admissions-print.component';

describe('AllAdmissionsPrintComponent', () => {
  let component: AllAdmissionsPrintComponent;
  let fixture: ComponentFixture<AllAdmissionsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdmissionsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdmissionsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
