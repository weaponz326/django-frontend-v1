import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableComponent } from './payable.component';

describe('PayableComponent', () => {
  let component: PayableComponent;
  let fixture: ComponentFixture<PayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
