import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIputComponent } from './apiput.component';

describe('APIputComponent', () => {
  let component: APIputComponent;
  let fixture: ComponentFixture<APIputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
