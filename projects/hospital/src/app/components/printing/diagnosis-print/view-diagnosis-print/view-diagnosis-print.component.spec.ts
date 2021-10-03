import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagnosisPrintComponent } from './view-diagnosis-print.component';

describe('ViewDiagnosisPrintComponent', () => {
  let component: ViewDiagnosisPrintComponent;
  let fixture: ComponentFixture<ViewDiagnosisPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDiagnosisPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagnosisPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
