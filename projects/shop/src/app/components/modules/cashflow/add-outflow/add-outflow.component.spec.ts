import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutflowComponent } from './add-outflow.component';

describe('AddOutflowComponent', () => {
  let component: AddOutflowComponent;
  let fixture: ComponentFixture<AddOutflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
