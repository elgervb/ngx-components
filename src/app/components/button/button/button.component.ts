import { Component, OnInit, Attribute, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() click = new EventEmitter<MouseEvent>();

  constructor(
    @Attribute('class') public clazz?: string,
    @Attribute('type') public type = 'button',
    @Attribute('variant') public variant?: 'primary' | 'secondary' | 'ghost'
  ) { }

  ngOnInit() { }

  get classes() {
    const variantClass = this.variant ? `btn-${this.variant}` : '';
    const userClass = this.clazz ? this.clazz : '';

    return `btn ${userClass} ${variantClass}`;
  }
}
