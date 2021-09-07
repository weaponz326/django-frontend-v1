import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobInputComponent } from './dob-input.component';

describe('DobInputComponent', () => {
  let component: DobInputComponent;
  let fixture: ComponentFixture<DobInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
