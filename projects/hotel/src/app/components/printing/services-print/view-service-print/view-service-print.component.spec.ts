import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServicePrintComponent } from './view-service-print.component';

describe('ViewServicePrintComponent', () => {
  let component: ViewServicePrintComponent;
  let fixture: ComponentFixture<ViewServicePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServicePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServicePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
