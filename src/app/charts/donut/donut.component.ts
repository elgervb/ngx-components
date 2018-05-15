import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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
export class DonutComponent implements OnInit, OnChanges {
  /** Progress in percentage */
  @Input() progress = 0;
  /** Invert the direction of the progress bar. Default to false (right) */
  @Input() invertDirection = false;
  /** The diameter in pixels of the component. Defaults to 120px */
  @Input() diameter = 120;
  /** The thickness in pixels of the progress bar. Defaults to 12px */
  @Input() thickness = 12;
  /** Whether or not to show progress percentage as text. Defaults to false */
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
        this.hostFontSize = Math.max(16, (this.diameter - 64 - (2 * this.thickness)) / 2);
      }
    }
  }

  /**
   * Calculate the progress and set styling properties accordingly
   *
   * @param value the progress value
   */
  private calculateProgress(value: number) {
    const progress = value / 100;
    const dashoffset = this.circumference * (1 - progress);

    this.progressValue.nativeElement.style.strokeDashoffset = dashoffset;
    this.progressValue.nativeElement.style.strokeDasharray = this.circumference;
  }
}
