import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileManagerDashBoardComponent } from './mobile-manager-dash-board.component';

describe('MobileManagerDashBoardComponent', () => {
  let component: MobileManagerDashBoardComponent;
  let fixture: ComponentFixture<MobileManagerDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileManagerDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileManagerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
