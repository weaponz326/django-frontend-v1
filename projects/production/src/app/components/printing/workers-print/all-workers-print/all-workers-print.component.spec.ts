import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkersPrintComponent } from './all-workers-print.component';

describe('AllWorkersPrintComponent', () => {
  let component: AllWorkersPrintComponent;
  let fixture: ComponentFixture<AllWorkersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWorkersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
