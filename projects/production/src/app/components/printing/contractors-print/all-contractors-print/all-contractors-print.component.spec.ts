import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContractorsPrintComponent } from './all-contractors-print.component';

describe('AllContractorsPrintComponent', () => {
  let component: AllContractorsPrintComponent;
  let fixture: ComponentFixture<AllContractorsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContractorsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContractorsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
