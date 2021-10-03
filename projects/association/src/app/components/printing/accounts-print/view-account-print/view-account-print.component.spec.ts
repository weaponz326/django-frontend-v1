import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountPrintComponent } from './view-account-print.component';

describe('ViewAccountPrintComponent', () => {
  let component: ViewAccountPrintComponent;
  let fixture: ComponentFixture<ViewAccountPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
