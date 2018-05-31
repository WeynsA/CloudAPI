import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apipost2Component } from './apipost2.component';

describe('Apipost2Component', () => {
  let component: Apipost2Component;
  let fixture: ComponentFixture<Apipost2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apipost2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apipost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
