import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExecutiveComponent } from './select-executive.component';

describe('SelectExecutiveComponent', () => {
  let component: SelectExecutiveComponent;
  let fixture: ComponentFixture<SelectExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
