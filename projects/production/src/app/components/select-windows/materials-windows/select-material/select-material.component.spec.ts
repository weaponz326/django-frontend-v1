import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMaterialComponent } from './select-material.component';

describe('SelectMaterialComponent', () => {
  let component: SelectMaterialComponent;
  let fixture: ComponentFixture<SelectMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
