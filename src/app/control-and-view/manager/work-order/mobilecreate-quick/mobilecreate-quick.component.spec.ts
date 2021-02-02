import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecreateQuickComponent } from './mobilecreate-quick.component';

describe('MobilecreateQuickComponent', () => {
  let component: MobilecreateQuickComponent;
  let fixture: ComponentFixture<MobilecreateQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecreateQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecreateQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
