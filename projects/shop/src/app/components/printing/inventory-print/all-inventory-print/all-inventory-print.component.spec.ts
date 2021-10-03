import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInventoryPrintComponent } from './all-inventory-print.component';

describe('AllInventoryPrintComponent', () => {
  let component: AllInventoryPrintComponent;
  let fixture: ComponentFixture<AllInventoryPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInventoryPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInventoryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
