import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayablesPageComponent } from './payables-page.component';

describe('PayablesPageComponent', () => {
  let component: PayablesPageComponent;
  let fixture: ComponentFixture<PayablesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayablesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
