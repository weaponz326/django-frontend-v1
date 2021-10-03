import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNursesPrintComponent } from './all-nurses-print.component';

describe('AllNursesPrintComponent', () => {
  let component: AllNursesPrintComponent;
  let fixture: ComponentFixture<AllNursesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNursesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNursesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
