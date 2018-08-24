import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evb-flyout-header',
  template: `
    <h2>{{title}}</h2>
    <button class="header__close" (click)="handleClose()">&times;</button>
  `,
  styleUrls: ['./flyout-header.component.scss']
})
export class FlyoutHeaderComponent implements OnInit {

  @Input() title?: string;

  @Output() triggerClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  handleClose() {
    this.triggerClose.emit();
  }
}
