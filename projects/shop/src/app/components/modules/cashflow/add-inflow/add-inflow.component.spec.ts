import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInflowComponent } from './add-inflow.component';

describe('AddInflowComponent', () => {
  let component: AddInflowComponent;
  let fixture: ComponentFixture<AddInflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
