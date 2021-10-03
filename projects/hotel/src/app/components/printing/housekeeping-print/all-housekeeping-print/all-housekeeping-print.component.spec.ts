import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHousekeepingPrintComponent } from './all-housekeeping-print.component';

describe('AllHousekeepingPrintComponent', () => {
  let component: AllHousekeepingPrintComponent;
  let fixture: ComponentFixture<AllHousekeepingPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHousekeepingPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHousekeepingPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
