import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseItemsComponent } from './dispense-items.component';

describe('DispenseItemsComponent', () => {
  let component: DispenseItemsComponent;
  let fixture: ComponentFixture<DispenseItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
