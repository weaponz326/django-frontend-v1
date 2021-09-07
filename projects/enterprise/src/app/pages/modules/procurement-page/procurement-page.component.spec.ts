import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementPageComponent } from './procurement-page.component';

describe('ProcurementPageComponent', () => {
  let component: ProcurementPageComponent;
  let fixture: ComponentFixture<ProcurementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
