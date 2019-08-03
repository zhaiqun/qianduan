import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifeComponent } from './test-life.component';

describe('TestLifeComponent', () => {
  let component: TestLifeComponent;
  let fixture: ComponentFixture<TestLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
