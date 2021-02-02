import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecreateWorkComponent } from './mobilecreate-work.component';

describe('MobilecreateWorkComponent', () => {
  let component: MobilecreateWorkComponent;
  let fixture: ComponentFixture<MobilecreateWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecreateWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecreateWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
