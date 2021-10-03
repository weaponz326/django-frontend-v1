import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSalesComponent } from './select-sales.component';

describe('SelectSalesComponent', () => {
  let component: SelectSalesComponent;
  let fixture: ComponentFixture<SelectSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
