import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDiagnosisComponent } from './select-diagnosis.component';

describe('SelectDiagnosisComponent', () => {
  let component: SelectDiagnosisComponent;
  let fixture: ComponentFixture<SelectDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
