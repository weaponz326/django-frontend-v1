import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuPrintComponent } from './view-menu-print.component';

describe('ViewMenuPrintComponent', () => {
  let component: ViewMenuPrintComponent;
  let fixture: ComponentFixture<ViewMenuPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
