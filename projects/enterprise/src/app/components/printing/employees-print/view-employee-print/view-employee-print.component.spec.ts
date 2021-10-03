import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeePrintComponent } from './view-employee-print.component';

describe('ViewEmployeePrintComponent', () => {
  let component: ViewEmployeePrintComponent;
  let fixture: ComponentFixture<ViewEmployeePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
