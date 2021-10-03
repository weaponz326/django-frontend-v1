import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeesPrintComponent } from './view-fees-print.component';

describe('ViewFeesPrintComponent', () => {
  let component: ViewFeesPrintComponent;
  let fixture: ComponentFixture<ViewFeesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
