import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiget2Component } from './apiget2.component';

describe('Apiget2Component', () => {
  let component: Apiget2Component;
  let fixture: ComponentFixture<Apiget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apiget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apiget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
