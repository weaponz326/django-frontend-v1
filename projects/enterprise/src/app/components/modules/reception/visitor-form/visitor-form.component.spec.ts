import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFormComponent } from './visitor-form.component';

describe('VisitorFormComponent', () => {
  let component: VisitorFormComponent;
  let fixture: ComponentFixture<VisitorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
