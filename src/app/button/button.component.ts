import { Component, OnInit, Attribute, Output, EventEmitter } from '@angular/core';

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

  @Output() click = new EventEmitter<MouseEvent>();

  constructor(
    @Attribute('class') public clazz?: string,
    @Attribute('type') public type?: string
  ) { }

  ngOnInit() { }
}
