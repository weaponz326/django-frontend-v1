import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsPageComponent } from './sittings-page.component';

describe('SittingsPageComponent', () => {
  let component: SittingsPageComponent;
  let fixture: ComponentFixture<SittingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
