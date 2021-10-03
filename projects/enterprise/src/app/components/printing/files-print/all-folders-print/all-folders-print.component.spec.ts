import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoldersPrintComponent } from './all-folders-print.component';

describe('AllFoldersPrintComponent', () => {
  let component: AllFoldersPrintComponent;
  let fixture: ComponentFixture<AllFoldersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoldersPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFoldersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
