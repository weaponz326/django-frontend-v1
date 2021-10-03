import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMaterialsPrintComponent } from './all-materials-print.component';

describe('AllMaterialsPrintComponent', () => {
  let component: AllMaterialsPrintComponent;
  let fixture: ComponentFixture<AllMaterialsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMaterialsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMaterialsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
