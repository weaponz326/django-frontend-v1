import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMembersPrintComponent } from './all-members-print.component';

describe('AllMembersPrintComponent', () => {
  let component: AllMembersPrintComponent;
  let fixture: ComponentFixture<AllMembersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMembersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMembersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
