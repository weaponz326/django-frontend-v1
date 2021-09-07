import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPromptComponent } from './access-prompt.component';

describe('AccessPromptComponent', () => {
  let component: AccessPromptComponent;
  let fixture: ComponentFixture<AccessPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
