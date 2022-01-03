import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuItemsPrintComponent } from './all-menu-items-print.component';

describe('AllMenuItemsPrintComponent', () => {
  let component: AllMenuItemsPrintComponent;
  let fixture: ComponentFixture<AllMenuItemsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMenuItemsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMenuItemsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
