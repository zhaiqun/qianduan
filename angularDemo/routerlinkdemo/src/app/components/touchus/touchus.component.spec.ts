import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchusComponent } from './touchus.component';

describe('TouchusComponent', () => {
  let component: TouchusComponent;
  let fixture: ComponentFixture<TouchusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
