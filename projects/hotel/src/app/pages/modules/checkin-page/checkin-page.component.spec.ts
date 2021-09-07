import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinPageComponent } from './checkin-page.component';

describe('CheckinPageComponent', () => {
  let component: CheckinPageComponent;
  let fixture: ComponentFixture<CheckinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
