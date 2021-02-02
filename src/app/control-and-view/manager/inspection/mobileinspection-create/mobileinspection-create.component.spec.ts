import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileinspectionCreateComponent } from './mobileinspection-create.component';

describe('MobileinspectionCreateComponent', () => {
  let component: MobileinspectionCreateComponent;
  let fixture: ComponentFixture<MobileinspectionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileinspectionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileinspectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
