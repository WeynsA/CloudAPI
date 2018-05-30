import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIdeleteComponent } from './apidelete.component';

describe('APIdeleteComponent', () => {
  let component: APIdeleteComponent;
  let fixture: ComponentFixture<APIdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
