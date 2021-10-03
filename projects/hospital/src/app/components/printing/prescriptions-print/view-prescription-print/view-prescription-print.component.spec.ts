import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionPrintComponent } from './view-prescription-print.component';

describe('ViewPrescriptionPrintComponent', () => {
  let component: ViewPrescriptionPrintComponent;
  let fixture: ComponentFixture<ViewPrescriptionPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrescriptionPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
