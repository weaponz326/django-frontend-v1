import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuGroupComponent } from './new-menu-group.component';

describe('NewMenuGroupComponent', () => {
  let component: NewMenuGroupComponent;
  let fixture: ComponentFixture<NewMenuGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMenuGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
