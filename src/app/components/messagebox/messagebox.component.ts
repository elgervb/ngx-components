import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'evb-messagebox',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./messagebox.component.scss']
})
export class MessageboxComponent {
  @Input() class = '';
  @Input() type: 'info' | 'error';

  @HostBinding('class')
  get hostClasses(): string {
    return `${this.class} messagebox messagebox--${this.type}`;
  }
}
