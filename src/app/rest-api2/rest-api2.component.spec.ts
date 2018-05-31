import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApi2Component } from './rest-api2.component';

describe('RestApi2Component', () => {
  let component: RestApi2Component;
  let fixture: ComponentFixture<RestApi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
