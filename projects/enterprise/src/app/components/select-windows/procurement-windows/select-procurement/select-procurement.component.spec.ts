import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProcurementComponent } from './select-procurement.component';

describe('SelectProcurementComponent', () => {
  let component: SelectProcurementComponent;
  let fixture: ComponentFixture<SelectProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProcurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
