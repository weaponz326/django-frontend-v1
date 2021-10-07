import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReservationComponent } from './select-reservation.component';

describe('SelectReservationComponent', () => {
  let component: SelectReservationComponent;
  let fixture: ComponentFixture<SelectReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
