import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomersPrintComponent } from './all-customers-print.component';

describe('AllCustomersPrintComponent', () => {
  let component: AllCustomersPrintComponent;
  let fixture: ComponentFixture<AllCustomersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
