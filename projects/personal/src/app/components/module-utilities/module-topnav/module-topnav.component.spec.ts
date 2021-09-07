import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTopnavComponent } from './module-topnav.component';

describe('ModuleTopnavComponent', () => {
  let component: ModuleTopnavComponent;
  let fixture: ComponentFixture<ModuleTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
