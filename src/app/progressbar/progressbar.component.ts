import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'evb-progressbar',
  template: `
  <div class="progressbar">
    <div class="progressbar__inner"[style.width.%]="progress"></div>
  </div>
  `,
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnChanges {

  @Input() progress = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['progress']) {
      this.progress = +changes['progress'].currentValue;
    }
  }

}
