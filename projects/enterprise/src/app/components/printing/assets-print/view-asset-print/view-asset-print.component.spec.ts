import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetPrintComponent } from './view-asset-print.component';

describe('ViewAssetPrintComponent', () => {
  let component: ViewAssetPrintComponent;
  let fixture: ComponentFixture<ViewAssetPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssetPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssetPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
