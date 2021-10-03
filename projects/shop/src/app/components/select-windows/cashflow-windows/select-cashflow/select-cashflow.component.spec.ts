import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCashflowComponent } from './select-cashflow.component';

describe('SelectCashflowComponent', () => {
  let component: SelectCashflowComponent;
  let fixture: ComponentFixture<SelectCashflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCashflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
