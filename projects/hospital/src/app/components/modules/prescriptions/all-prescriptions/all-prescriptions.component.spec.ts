import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrescriptionsComponent } from './all-prescriptions.component';

describe('AllPrescriptionsComponent', () => {
  let component: AllPrescriptionsComponent;
  let fixture: ComponentFixture<AllPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
