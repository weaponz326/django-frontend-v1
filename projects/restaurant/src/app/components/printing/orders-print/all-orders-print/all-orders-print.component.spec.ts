import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersPrintComponent } from './all-orders-print.component';

describe('AllOrdersPrintComponent', () => {
  let component: AllOrdersPrintComponent;
  let fixture: ComponentFixture<AllOrdersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrdersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
