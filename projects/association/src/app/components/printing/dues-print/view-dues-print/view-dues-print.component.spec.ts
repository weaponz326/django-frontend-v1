import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDuesPrintComponent } from './view-dues-print.component';

describe('ViewDuesPrintComponent', () => {
  let component: ViewDuesPrintComponent;
  let fixture: ComponentFixture<ViewDuesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDuesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDuesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
