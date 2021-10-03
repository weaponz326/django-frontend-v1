import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLeaveComponent } from './select-leave.component';

describe('SelectLeaveComponent', () => {
  let component: SelectLeaveComponent;
  let fixture: ComponentFixture<SelectLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
