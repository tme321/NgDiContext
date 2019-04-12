import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleOneComponent } from './middle-one.component';

describe('MiddleOneComponent', () => {
  let component: MiddleOneComponent;
  let fixture: ComponentFixture<MiddleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
