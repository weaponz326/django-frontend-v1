import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionPromptComponent } from './connection-prompt.component';

describe('ConnectionPromptComponent', () => {
  let component: ConnectionPromptComponent;
  let fixture: ComponentFixture<ConnectionPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
