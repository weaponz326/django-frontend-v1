import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRosterComponent } from './select-roster.component';

describe('SelectRosterComponent', () => {
  let component: SelectRosterComponent;
  let fixture: ComponentFixture<SelectRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
