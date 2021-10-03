import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFilePrintComponent } from './view-file-print.component';

describe('ViewFilePrintComponent', () => {
  let component: ViewFilePrintComponent;
  let fixture: ComponentFixture<ViewFilePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFilePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFilePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
