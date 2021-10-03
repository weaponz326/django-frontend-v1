import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupPrintComponent } from './view-group-print.component';

describe('ViewGroupPrintComponent', () => {
  let component: ViewGroupPrintComponent;
  let fixture: ComponentFixture<ViewGroupPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroupPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
