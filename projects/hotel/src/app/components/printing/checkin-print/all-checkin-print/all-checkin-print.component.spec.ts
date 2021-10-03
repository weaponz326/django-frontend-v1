import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCheckinPrintComponent } from './all-checkin-print.component';

describe('AllCheckinPrintComponent', () => {
  let component: AllCheckinPrintComponent;
  let fixture: ComponentFixture<AllCheckinPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCheckinPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCheckinPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
