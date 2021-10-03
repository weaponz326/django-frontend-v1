import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsPrintComponent } from './all-accounts-print.component';

describe('AllAccountsPrintComponent', () => {
  let component: AllAccountsPrintComponent;
  let fixture: ComponentFixture<AllAccountsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAccountsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
