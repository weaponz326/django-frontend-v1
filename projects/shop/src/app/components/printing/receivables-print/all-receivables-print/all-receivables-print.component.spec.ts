import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceivablesPrintComponent } from './all-receivables-print.component';

describe('AllReceivablesPrintComponent', () => {
  let component: AllReceivablesPrintComponent;
  let fixture: ComponentFixture<AllReceivablesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReceivablesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReceivablesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
