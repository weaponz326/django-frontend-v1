import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassesPrintComponent } from './all-classes-print.component';

describe('AllClassesPrintComponent', () => {
  let component: AllClassesPrintComponent;
  let fixture: ComponentFixture<AllClassesPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClassesPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClassesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
