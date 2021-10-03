import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBillsPrintComponent } from './all-bills-print.component';

describe('AllBillsPrintComponent', () => {
  let component: AllBillsPrintComponent;
  let fixture: ComponentFixture<AllBillsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBillsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBillsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
