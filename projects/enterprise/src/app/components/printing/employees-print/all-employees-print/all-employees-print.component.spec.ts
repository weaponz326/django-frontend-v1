import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeesPrintComponent } from './all-employees-print.component';

describe('AllEmployeesPrintComponent', () => {
  let component: AllEmployeesPrintComponent;
  let fixture: ComponentFixture<AllEmployeesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
