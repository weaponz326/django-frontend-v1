import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockItemComponent } from './add-stock-item.component';

describe('AddStockItemComponent', () => {
  let component: AddStockItemComponent;
  let fixture: ComponentFixture<AddStockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
