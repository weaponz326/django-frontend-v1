import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommitteesPrintComponent } from './all-committees-print.component';

describe('AllCommitteesPrintComponent', () => {
  let component: AllCommitteesPrintComponent;
  let fixture: ComponentFixture<AllCommitteesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommitteesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommitteesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
