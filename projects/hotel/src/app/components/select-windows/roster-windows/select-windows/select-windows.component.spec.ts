import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWindowsComponent } from './select-windows.component';

describe('SelectWindowsComponent', () => {
  let component: SelectWindowsComponent;
  let fixture: ComponentFixture<SelectWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
