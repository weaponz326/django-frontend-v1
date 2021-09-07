import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionItemsComponent } from './prescription-items.component';

describe('PrescriptionItemsComponent', () => {
  let component: PrescriptionItemsComponent;
  let fixture: ComponentFixture<PrescriptionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
