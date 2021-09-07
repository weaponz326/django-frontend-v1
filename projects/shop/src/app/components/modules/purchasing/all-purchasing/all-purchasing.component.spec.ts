import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasingComponent } from './all-purchasing.component';

describe('AllPurchasingComponent', () => {
  let component: AllPurchasingComponent;
  let fixture: ComponentFixture<AllPurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPurchasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
