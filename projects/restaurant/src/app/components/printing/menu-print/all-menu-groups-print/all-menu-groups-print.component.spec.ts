import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuGroupsPrintComponent } from './all-menu-groups-print.component';

describe('AllMenuGroupsPrintComponent', () => {
  let component: AllMenuGroupsPrintComponent;
  let fixture: ComponentFixture<AllMenuGroupsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMenuGroupsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMenuGroupsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
