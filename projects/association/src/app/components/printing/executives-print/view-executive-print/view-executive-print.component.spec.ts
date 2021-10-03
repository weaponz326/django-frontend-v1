import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExecutivePrintComponent } from './view-executive-print.component';

describe('ViewExecutivePrintComponent', () => {
  let component: ViewExecutivePrintComponent;
  let fixture: ComponentFixture<ViewExecutivePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExecutivePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExecutivePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
