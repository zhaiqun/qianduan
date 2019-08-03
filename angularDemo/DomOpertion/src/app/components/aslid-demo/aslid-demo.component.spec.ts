import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AslidDemoComponent } from './aslid-demo.component';

describe('AslidDemoComponent', () => {
  let component: AslidDemoComponent;
  let fixture: ComponentFixture<AslidDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AslidDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AslidDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
