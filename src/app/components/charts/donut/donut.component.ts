import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

const MIN_DIAMETER = 16;
const PADDING = 64;
const MAX_PERCENTAGE = 100;

export interface DonutModel {
  progress: number;
  /** Invert the direction of the progress bar. Default to false (right) */
  invertDirection: boolean;
  /** The diameter in pixels of the component. Defaults to 120px */
  diameter: number;
  /** The thickness in pixels of the progress bar. Defaults to 12px */
  thickness: number;
  /** Whether or not to show progress percentage as text. Defaults to false */
  showText: boolean;
}
/**
 * Donut chart. Basically a circle diagram with a hole in it...
 */
@Component({
  selector: 'evb-donut',
  template: `
    <svg class="progress"
      [attr.width]="diameter"
      [attr.height]="diameter"
      [attr.viewBox]="viewbox"
      [attr.data-progress]="100">

      <circle class="progress__meter"
        [attr.cx]="diameter/2"
        [attr.cy]="diameter/2"
        [attr.r]="diameter/2-thickness/2"
        [attr.stroke-width]="thickness" />

      <circle #progress class="progress__value"
        [class.arc-left]="invertDirection"
        [attr.cx]="diameter/2"
        [attr.cy]="diameter/2"
        [attr.r]="diameter/2-thickness/2"
        [attr.stroke-width]="thickness" />
    </svg>
  `,
  styleUrls: ['donut.component.scss']
})
export class DonutComponent implements OnInit, OnChanges, DonutModel {
  @Input() progress = 0;
  @Input() invertDirection = false;
  @Input() diameter = 120;
  @Input() thickness = 12;
  @Input() showText = false;

  /**
   * The progress element
   */
  @ViewChild('progress') progressValue: ElementRef;
  /**
   * Whether or not to show the progress text in the middle of the donut
   */
  @HostBinding('class.progress--with-text') hostShowText: boolean;
  /**
   * Bind the progress to a data attribute on the host
   */
  @HostBinding('attr.data-progress') hostProgress: number;
  /**
   * When showing text, use this font size
   */
  @HostBinding('style.fontSize.px') hostFontSize: number;

  /** the circumference fo the donut */
  private circumference = (this.diameter - this.thickness) * Math.PI;

  /**
   * Get the SVG viewbox value for the recalculated donut
   */
  get viewbox() {
    return `0 0 ${this.diameter} ${this.diameter}`;
  }

  ngOnInit() {
    this.calculateProgress(this.progress);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.circumference = (this.diameter - this.thickness) * Math.PI;
      this.calculateProgress(this.progress);
      this.hostShowText = this.showText;

      if (this.showText) {
        this.hostProgress = this.progress;
        this.hostFontSize = Math.max(MIN_DIAMETER, (this.diameter - PADDING - (this.thickness * 2)) / 2);
      }
    }
  }

  /**
   * Calculate the progress and set styling properties accordingly
   */
  private calculateProgress(value: number) {
    const progress = value / MAX_PERCENTAGE;
    const dashoffset = this.circumference * (1 - progress);

    this.progressValue.nativeElement.style.strokeDashoffset = dashoffset;
    this.progressValue.nativeElement.style.strokeDasharray = this.circumference;
  }
}
