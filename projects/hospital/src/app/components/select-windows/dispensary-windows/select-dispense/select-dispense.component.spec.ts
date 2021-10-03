import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDispenseComponent } from './select-dispense.component';

describe('SelectDispenseComponent', () => {
  let component: SelectDispenseComponent;
  let fixture: ComponentFixture<SelectDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
