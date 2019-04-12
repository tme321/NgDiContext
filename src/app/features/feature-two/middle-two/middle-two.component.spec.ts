import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTwoComponent } from './middle-two.component';

describe('MiddleTwoComponent', () => {
  let component: MiddleTwoComponent;
  let fixture: ComponentFixture<MiddleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
