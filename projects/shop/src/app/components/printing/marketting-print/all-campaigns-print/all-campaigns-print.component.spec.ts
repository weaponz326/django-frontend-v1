import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampaignsPrintComponent } from './all-campaigns-print.component';

describe('AllCampaignsPrintComponent', () => {
  let component: AllCampaignsPrintComponent;
  let fixture: ComponentFixture<AllCampaignsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCampaignsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCampaignsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
