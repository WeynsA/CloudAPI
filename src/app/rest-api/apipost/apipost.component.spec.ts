import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIpostComponent } from './apipost.component';

describe('APIpostComponent', () => {
  let component: APIpostComponent;
  let fixture: ComponentFixture<APIpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
