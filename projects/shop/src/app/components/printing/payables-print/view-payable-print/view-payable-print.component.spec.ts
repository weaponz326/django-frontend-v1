import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPayablePrintComponent } from './view-payable-print.component';

describe('ViewPayablePrintComponent', () => {
  let component: ViewPayablePrintComponent;
  let fixture: ComponentFixture<ViewPayablePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPayablePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPayablePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
