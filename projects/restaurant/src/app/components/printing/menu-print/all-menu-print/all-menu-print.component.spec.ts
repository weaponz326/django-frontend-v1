import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuPrintComponent } from './all-menu-print.component';

describe('AllMenuPrintComponent', () => {
  let component: AllMenuPrintComponent;
  let fixture: ComponentFixture<AllMenuPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMenuPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMenuPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
