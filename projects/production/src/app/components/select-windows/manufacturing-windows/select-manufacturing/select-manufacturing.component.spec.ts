import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectManufacturingComponent } from './select-manufacturing.component';

describe('SelectManufacturingComponent', () => {
  let component: SelectManufacturingComponent;
  let fixture: ComponentFixture<SelectManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectManufacturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
