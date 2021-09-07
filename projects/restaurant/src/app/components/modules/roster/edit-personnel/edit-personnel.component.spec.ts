import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonnelComponent } from './edit-personnel.component';

describe('EditPersonnelComponent', () => {
  let component: EditPersonnelComponent;
  let fixture: ComponentFixture<EditPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
