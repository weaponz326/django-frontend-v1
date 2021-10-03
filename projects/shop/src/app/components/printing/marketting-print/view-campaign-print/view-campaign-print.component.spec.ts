import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignPrintComponent } from './view-campaign-print.component';

describe('ViewCampaignPrintComponent', () => {
  let component: ViewCampaignPrintComponent;
  let fixture: ComponentFixture<ViewCampaignPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampaignPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampaignPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
