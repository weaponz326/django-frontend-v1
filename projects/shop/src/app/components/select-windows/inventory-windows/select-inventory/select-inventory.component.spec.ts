import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInventoryComponent } from './select-inventory.component';

describe('SelectInventoryComponent', () => {
  let component: SelectInventoryComponent;
  let fixture: ComponentFixture<SelectInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
