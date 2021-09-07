import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWardsComponent } from './all-wards.component';

describe('AllWardsComponent', () => {
  let component: AllWardsComponent;
  let fixture: ComponentFixture<AllWardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
