import { Directive, Input, HostListener } from '@angular/core';
import { FlyoutComponent } from '..';

@Directive({
  selector: '[evbFlyoutToggle]'
})
export class FlyoutToggleDirective {

  @Input() evbFlyoutToggle?: FlyoutComponent;

  @HostListener('click') onClick() {
    if (this.evbFlyoutToggle && this.evbFlyoutToggle.toggle) {
      this.evbFlyoutToggle.toggle();
    }
  }

  constructor() { }
}
