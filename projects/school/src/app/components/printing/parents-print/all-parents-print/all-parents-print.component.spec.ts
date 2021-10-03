import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParentsPrintComponent } from './all-parents-print.component';

describe('AllParentsPrintComponent', () => {
  let component: AllParentsPrintComponent;
  let fixture: ComponentFixture<AllParentsPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllParentsPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllParentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
