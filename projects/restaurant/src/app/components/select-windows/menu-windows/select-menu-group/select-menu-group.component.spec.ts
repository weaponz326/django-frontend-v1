import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMenuGroupComponent } from './select-menu-group.component';

describe('SelectMenuGroupComponent', () => {
  let component: SelectMenuGroupComponent;
  let fixture: ComponentFixture<SelectMenuGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMenuGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
