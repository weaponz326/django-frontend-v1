import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPayableComponent } from './select-payable.component';

describe('SelectPayableComponent', () => {
  let component: SelectPayableComponent;
  let fixture: ComponentFixture<SelectPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
