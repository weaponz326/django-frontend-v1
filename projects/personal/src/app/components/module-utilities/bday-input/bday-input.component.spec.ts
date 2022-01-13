import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayInputComponent } from './bday-input.component';

describe('BdayInputComponent', () => {
  let component: BdayInputComponent;
  let fixture: ComponentFixture<BdayInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdayInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
