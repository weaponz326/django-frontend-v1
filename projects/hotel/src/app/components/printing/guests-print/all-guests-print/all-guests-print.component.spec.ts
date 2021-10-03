import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuestsPrintComponent } from './all-guests-print.component';

describe('AllGuestsPrintComponent', () => {
  let component: AllGuestsPrintComponent;
  let fixture: ComponentFixture<AllGuestsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGuestsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuestsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
