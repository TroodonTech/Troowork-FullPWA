import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileviewWorkComponent } from './mobileview-work.component';

describe('MobileviewWorkComponent', () => {
  let component: MobileviewWorkComponent;
  let fixture: ComponentFixture<MobileviewWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileviewWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileviewWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
