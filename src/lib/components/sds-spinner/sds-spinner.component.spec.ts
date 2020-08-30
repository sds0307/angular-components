import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsSpinnerComponent } from './sds-spinner.component';

describe('SdsSpinnerComponent', () => {
  let component: SdsSpinnerComponent;
  let fixture: ComponentFixture<SdsSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
