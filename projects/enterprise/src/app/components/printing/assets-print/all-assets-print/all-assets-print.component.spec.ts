import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssetsPrintComponent } from './all-assets-print.component';

describe('AllAssetsPrintComponent', () => {
  let component: AllAssetsPrintComponent;
  let fixture: ComponentFixture<AllAssetsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAssetsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAssetsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
