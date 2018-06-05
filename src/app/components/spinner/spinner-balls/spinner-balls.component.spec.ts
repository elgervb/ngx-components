import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBallsComponent } from './spinner-balls.component';

describe('SpinnerBallsComponent', () => {
  let component: SpinnerBallsComponent;
  let fixture: ComponentFixture<SpinnerBallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerBallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
