import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWardsPrintComponent } from './all-wards-print.component';

describe('AllWardsPrintComponent', () => {
  let component: AllWardsPrintComponent;
  let fixture: ComponentFixture<AllWardsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWardsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWardsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
