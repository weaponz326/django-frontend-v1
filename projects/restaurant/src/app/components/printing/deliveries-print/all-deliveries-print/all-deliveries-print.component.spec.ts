import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveriesPrintComponent } from './all-deliveries-print.component';

describe('AllDeliveriesPrintComponent', () => {
  let component: AllDeliveriesPrintComponent;
  let fixture: ComponentFixture<AllDeliveriesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDeliveriesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliveriesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
