import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReceivableComponent } from './select-receivable.component';

describe('SelectReceivableComponent', () => {
  let component: SelectReceivableComponent;
  let fixture: ComponentFixture<SelectReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReceivableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
