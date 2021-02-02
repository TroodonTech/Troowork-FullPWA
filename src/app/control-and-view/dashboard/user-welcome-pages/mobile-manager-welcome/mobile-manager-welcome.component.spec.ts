import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileManagerWelcomeComponent } from './mobile-manager-welcome.component';

describe('MobileManagerWelcomeComponent', () => {
  let component: MobileManagerWelcomeComponent;
  let fixture: ComponentFixture<MobileManagerWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileManagerWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileManagerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
