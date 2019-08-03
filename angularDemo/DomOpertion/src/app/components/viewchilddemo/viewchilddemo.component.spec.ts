import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchilddemoComponent } from './viewchilddemo.component';

describe('ViewchilddemoComponent', () => {
  let component: ViewchilddemoComponent;
  let fixture: ComponentFixture<ViewchilddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchilddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchilddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
