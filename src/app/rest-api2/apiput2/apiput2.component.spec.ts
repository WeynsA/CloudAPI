import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiput2Component } from './apiput2.component';

describe('Apiput2Component', () => {
  let component: Apiput2Component;
  let fixture: ComponentFixture<Apiput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apiput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apiput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
