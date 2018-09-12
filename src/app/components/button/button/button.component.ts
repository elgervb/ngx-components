import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evb-button',
  template: `
    <button [class]="classes"
      [type]="type"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() clazz?: string;
  @Input() type = 'button';
  @Input() variant?: 'primary' | 'secondary' | 'ghost';

  constructor() { }

  ngOnInit() { }

  get classes() {
    const variantClass = this.variant ? `btn-${this.variant}` : '';
    const userClass = this.clazz ? this.clazz : '';

    return `btn ${userClass} ${variantClass}`;
  }
}
