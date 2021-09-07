import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFormComponent } from './received-form.component';

describe('ReceivedFormComponent', () => {
  let component: ReceivedFormComponent;
  let fixture: ComponentFixture<ReceivedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
