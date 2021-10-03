import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventoryPrintComponent } from './view-inventory-print.component';

describe('ViewInventoryPrintComponent', () => {
  let component: ViewInventoryPrintComponent;
  let fixture: ComponentFixture<ViewInventoryPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInventoryPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventoryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
