import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabsPrintComponent } from './all-labs-print.component';

describe('AllLabsPrintComponent', () => {
  let component: AllLabsPrintComponent;
  let fixture: ComponentFixture<AllLabsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLabsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLabsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
