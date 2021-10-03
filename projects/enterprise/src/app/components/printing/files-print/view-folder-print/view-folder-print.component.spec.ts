import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFolderPrintComponent } from './view-folder-print.component';

describe('ViewFolderPrintComponent', () => {
  let component: ViewFolderPrintComponent;
  let fixture: ComponentFixture<ViewFolderPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFolderPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFolderPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
