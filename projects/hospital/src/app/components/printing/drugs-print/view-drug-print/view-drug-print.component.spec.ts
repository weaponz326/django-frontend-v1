import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDrugPrintComponent } from './view-drug-print.component';

describe('ViewDrugPrintComponent', () => {
  let component: ViewDrugPrintComponent;
  let fixture: ComponentFixture<ViewDrugPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDrugPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDrugPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
