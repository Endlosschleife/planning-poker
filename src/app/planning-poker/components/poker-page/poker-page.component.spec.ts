import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerPageComponent } from './poker-page.component';

describe('PokerPageComponent', () => {
  let component: PokerPageComponent;
  let fixture: ComponentFixture<PokerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
