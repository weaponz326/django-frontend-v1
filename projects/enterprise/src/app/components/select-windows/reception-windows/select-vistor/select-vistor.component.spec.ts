import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVistorComponent } from './select-vistor.component';

describe('SelectVistorComponent', () => {
  let component: SelectVistorComponent;
  let fixture: ComponentFixture<SelectVistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVistorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
