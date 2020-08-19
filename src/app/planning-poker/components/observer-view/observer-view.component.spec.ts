import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverViewComponent } from './observer-view.component';

describe('ObserverViewComponent', () => {
  let component: ObserverViewComponent;
  let fixture: ComponentFixture<ObserverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
