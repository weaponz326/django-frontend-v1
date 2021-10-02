import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailsComponent } from './worker-details.component';

describe('WorkerDetailsComponent', () => {
  let component: WorkerDetailsComponent;
  let fixture: ComponentFixture<WorkerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
