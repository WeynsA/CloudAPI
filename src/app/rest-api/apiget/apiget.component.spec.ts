import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigetComponent } from './apiget.component';

describe('ApigetComponent', () => {
  let component: ApigetComponent;
  let fixture: ComponentFixture<ApigetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApigetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
