import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContextFeatureComponent } from './no-context-feature.component';

describe('NoContextFeatureComponent', () => {
  let component: NoContextFeatureComponent;
  let fixture: ComponentFixture<NoContextFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoContextFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContextFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
