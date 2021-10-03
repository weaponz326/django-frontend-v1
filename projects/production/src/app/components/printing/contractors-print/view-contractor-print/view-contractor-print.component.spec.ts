import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractorPrintComponent } from './view-contractor-print.component';

describe('ViewContractorPrintComponent', () => {
  let component: ViewContractorPrintComponent;
  let fixture: ComponentFixture<ViewContractorPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContractorPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractorPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
