import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutHeaderComponent } from './flyout-header.component';

describe('FlyoutHeaderComponent', () => {
  let component: FlyoutHeaderComponent;
  let fixture: ComponentFixture<FlyoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
