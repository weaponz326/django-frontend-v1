import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialPrintComponent } from './view-material-print.component';

describe('ViewMaterialPrintComponent', () => {
  let component: ViewMaterialPrintComponent;
  let fixture: ComponentFixture<ViewMaterialPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaterialPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
