import { Component, OnInit, Attribute, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evb-button',
  template: `
    <button class="btn {{clazz}}"
      [type]="type || 'button'"
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
    @Attribute('type') public type?: string
  ) { }

  ngOnInit() { }
}
