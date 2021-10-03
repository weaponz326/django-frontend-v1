import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsPrintComponent } from './all-products-print.component';

describe('AllProductsPrintComponent', () => {
  let component: AllProductsPrintComponent;
  let fixture: ComponentFixture<AllProductsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
