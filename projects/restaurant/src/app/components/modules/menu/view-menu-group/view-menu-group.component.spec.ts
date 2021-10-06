import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuGroupComponent } from './view-menu-group.component';

describe('ViewMenuGroupComponent', () => {
  let component: ViewMenuGroupComponent;
  let fixture: ComponentFixture<ViewMenuGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
