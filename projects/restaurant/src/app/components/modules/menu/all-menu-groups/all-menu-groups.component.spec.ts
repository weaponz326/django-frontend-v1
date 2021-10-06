import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuGroupsComponent } from './all-menu-groups.component';

describe('AllMenuGroupsComponent', () => {
  let component: AllMenuGroupsComponent;
  let fixture: ComponentFixture<AllMenuGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMenuGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMenuGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
