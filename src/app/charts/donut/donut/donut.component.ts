import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'evb-donut',
  template: `
    <svg class="progress" [attr.width]="width" [attr.height]="width" [attr.viewBox]="viewbox"
      [class.arc-left]="invertDirection">
      <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="12" />
      <circle #progress class="progress__value" cx="60" cy="60" r="54" stroke-width="12" />
    </svg>
  `,
  styleUrls: ['donut.component.scss']
})
export class DonutComponent implements OnInit, OnChanges {
  @Input() progress = 40;
  @Input() invertDirection = false;
  @Input() width = 120;

  @ViewChild('progress') progressValue: ElementRef;

  circumference = this.width * Math.PI;

  constructor() {
    //
  }

  get viewbox() {
    return `0 0 ${this.width} ${this.width}`;
  }

  ngOnInit(): void {
    this.progressValue.nativeElement.style.strokeDasharray = this.circumference;
    this.calculateProgress(this.progress);
  }

  ngOnChanges(): void {
    this.calculateProgress(this.progress);
  }

  calculateProgress(value: number): void {
    const progress = value / 100;
    const dashoffset = this.circumference * (1 - progress);

    this.progressValue.nativeElement.style.strokeDashoffset = dashoffset;
  }
}
