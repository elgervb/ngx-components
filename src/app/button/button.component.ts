import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evb-button',
  template: `
    <button class="btn {{class}}"
      [type]="type || 'button'">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() class: string;
  @Input() type?: string;

  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() { }
}
