import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionSpinnerComponent } from './connection-spinner.component';

describe('ConnectionSpinnerComponent', () => {
  let component: ConnectionSpinnerComponent;
  let fixture: ComponentFixture<ConnectionSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
