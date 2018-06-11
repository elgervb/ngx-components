import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';
import { FlyoutHeaderComponent } from '../flyout-header/flyout-header.component';

@Component({
  selector: 'evb-flyout',
  template: `
    <aside class="flyout" *ngIf="isOpen">
      <ng-content></ng-content>
    </aside>
  `,
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent implements OnInit, AfterContentInit {

  @ContentChild(FlyoutHeaderComponent) header?: FlyoutHeaderComponent;

  get isOpen() {
    return this._open;
  }

  private _open = false;

  constructor() { }

  ngOnInit() {
    //
  }

  ngAfterContentInit() {
    if (this.header) {
      this.header.close.subscribe(() => this.close());
    }
  }

  open() {
    this._open = true;
  }

  close() {
    this._open = false;
  }

  toggle() {
    this._open = !this._open;
  }

}
