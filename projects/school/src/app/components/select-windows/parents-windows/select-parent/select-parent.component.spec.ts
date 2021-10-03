import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectParentComponent } from './select-parent.component';

describe('SelectParentComponent', () => {
  let component: SelectParentComponent;
  let fixture: ComponentFixture<SelectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
