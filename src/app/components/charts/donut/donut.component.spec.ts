import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DonutComponent } from './donut.component';

const DIAMETER = 480;
const PROGRESS = 20;

describe('DonutComponent', () => {
  let component: DonutComponent;
  let fixture: ComponentFixture<DonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DonutComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have viewbox', () => {
    expect(component.viewbox).toBe(`0 0 ${component.diameter} ${component.diameter}`);
  });

  it('should render the viewbox attribute', () => {
    component.diameter = DIAMETER;
    fixture.detectChanges();

    const svgElement = fixture.nativeElement.querySelector('.progress') as SVGElement;
    expect(svgElement).not.toBeNull();

    const attrViewbox = svgElement.getAttribute('viewBox');
    expect(attrViewbox).toBe(`0 0 ${DIAMETER} ${DIAMETER}`);
  });

  it('should update progress on host when showtext is true', () => {

    component.showText = true;
    component.progress = PROGRESS;
    component.ngOnChanges({ progress: new SimpleChange(0, PROGRESS, true) });

    expect(component.hostProgress).toEqual(component.progress);
  });

  it('should not update progress on host when showtext is false', () => {
    component.showText = false;
    component.progress = PROGRESS;
    component.ngOnChanges({ progress: new SimpleChange(0, PROGRESS, true) });

    expect(component.hostProgress).toBeUndefined();
  });
});
