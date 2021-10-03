import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmissionPrintComponent } from './view-admission-print.component';

describe('ViewAdmissionPrintComponent', () => {
  let component: ViewAdmissionPrintComponent;
  let fixture: ComponentFixture<ViewAdmissionPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdmissionPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmissionPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
