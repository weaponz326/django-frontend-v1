import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeliveryComponent } from './select-delivery.component';

describe('SelectDeliveryComponent', () => {
  let component: SelectDeliveryComponent;
  let fixture: ComponentFixture<SelectDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
