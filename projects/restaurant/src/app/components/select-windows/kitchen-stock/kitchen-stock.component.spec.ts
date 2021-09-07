import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStockComponent } from './kitchen-stock.component';

describe('KitchenStockComponent', () => {
  let component: KitchenStockComponent;
  let fixture: ComponentFixture<KitchenStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
