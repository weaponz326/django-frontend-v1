import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroupsPrintComponent } from './all-groups-print.component';

describe('AllGroupsPrintComponent', () => {
  let component: AllGroupsPrintComponent;
  let fixture: ComponentFixture<AllGroupsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGroupsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGroupsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
