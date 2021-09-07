import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorComponent } from './edit-visitor.component';

describe('EditVisitorComponent', () => {
  let component: EditVisitorComponent;
  let fixture: ComponentFixture<EditVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
