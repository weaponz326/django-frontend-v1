import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDiagnosisPrintComponent } from './all-diagnosis-print.component';

describe('AllDiagnosisPrintComponent', () => {
  let component: AllDiagnosisPrintComponent;
  let fixture: ComponentFixture<AllDiagnosisPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDiagnosisPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDiagnosisPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
