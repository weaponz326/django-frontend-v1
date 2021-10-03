import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPurchasingComponent } from './select-purchasing.component';

describe('SelectPurchasingComponent', () => {
  let component: SelectPurchasingComponent;
  let fixture: ComponentFixture<SelectPurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPurchasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
