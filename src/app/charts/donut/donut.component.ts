import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'evb-donut',
  template: `
    <svg class="progress"
      [attr.width]="width"
      [attr.height]="width"
      [attr.viewBox]="viewbox"
      [attr.data-progress]="100">

      <circle class="progress__meter"
        [attr.cx]="width/2"
        [attr.cy]="width/2"
        [attr.r]="width/2-thickness/2"
        [attr.stroke-width]="thickness" />

      <circle #progress class="progress__value"
        [class.arc-left]="invertDirection"
        [attr.cx]="width/2"
        [attr.cy]="width/2"
        [attr.r]="width/2-thickness/2"
        [attr.stroke-width]="thickness" />
    </svg>
  `,
  styleUrls: ['donut.component.scss']
})
export class DonutComponent implements OnInit, OnChanges {
  @Input() progress = 0;
  @Input() invertDirection = false;
  @Input() width = 120;
  @Input() thickness = 12;
  @Input() showText = false;

  @ViewChild('progress') progressValue: ElementRef;
  @HostBinding('class.progress--with-text') hostShowText;
  @HostBinding('attr.data-progress') hostProgress;
  @HostBinding('style.fontSize.px') hostFontSize;

  private circumference = (this.width - this.thickness) * Math.PI;

  constructor() {
    //
  }

  get viewbox() {
    return `0 0 ${this.width} ${this.width}`;
  }

  ngOnInit(): void {
    this.calculateProgress(this.progress);
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.circumference = (this.width - this.thickness) * Math.PI;
    this.calculateProgress(this.progress);
    this.hostShowText = this.showText;

    if (this.showText) {
      this.hostProgress = this.progress;
      this.hostFontSize = Math.max(16, (this.width - 64 - (2 * this.thickness)) / 2);
    }
  }

  private calculateProgress(value: number): void {
    const progress = value / 100;
    const dashoffset = this.circumference * (1 - progress);

    this.progressValue.nativeElement.style.strokeDashoffset = dashoffset;
    this.progressValue.nativeElement.style.strokeDasharray = this.circumference;
  }
}
