import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvitationComponent } from './view-invitation.component';

describe('ViewInvitationComponent', () => {
  let component: ViewInvitationComponent;
  let fixture: ComponentFixture<ViewInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
