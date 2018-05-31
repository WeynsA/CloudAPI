import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apidelete2Component } from './apidelete2.component';

describe('Apidelete2Component', () => {
  let component: Apidelete2Component;
  let fixture: ComponentFixture<Apidelete2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apidelete2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apidelete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
