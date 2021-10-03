import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeavePrintComponent } from './all-leave-print.component';

describe('AllLeavePrintComponent', () => {
  let component: AllLeavePrintComponent;
  let fixture: ComponentFixture<AllLeavePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeavePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeavePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
