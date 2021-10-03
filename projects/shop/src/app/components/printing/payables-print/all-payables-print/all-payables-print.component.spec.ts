import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPayablesPrintComponent } from './all-payables-print.component';

describe('AllPayablesPrintComponent', () => {
  let component: AllPayablesPrintComponent;
  let fixture: ComponentFixture<AllPayablesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPayablesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPayablesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
