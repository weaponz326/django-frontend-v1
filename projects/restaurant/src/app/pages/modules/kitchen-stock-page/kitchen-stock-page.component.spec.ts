import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStockPageComponent } from './kitchen-stock-page.component';

describe('KitchenStockPageComponent', () => {
  let component: KitchenStockPageComponent;
  let fixture: ComponentFixture<KitchenStockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenStockPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenStockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
