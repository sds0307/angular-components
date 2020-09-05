import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsProfileCardComponent } from './sds-profile-card.component';

describe('SdsProfileCardComponent', () => {
  let component: SdsProfileCardComponent;
  let fixture: ComponentFixture<SdsProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
