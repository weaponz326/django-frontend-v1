import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingItemsComponent } from './purchasing-items.component';

describe('PurchasingItemsComponent', () => {
  let component: PurchasingItemsComponent;
  let fixture: ComponentFixture<PurchasingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
