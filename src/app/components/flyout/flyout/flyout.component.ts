import { Component, OnInit, AfterContentInit, ContentChild, HostListener, OnDestroy } from '@angular/core';
import { FlyoutHeaderComponent } from '../flyout-header/flyout-header.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Observable, Subject } from 'rxjs';

const animationDuration = 250;

@Component({
  selector: 'evb-flyout',
  template: `
    <aside class="flyout" *ngIf="isOpen"  [@flyInOut]="isOpen">
      <ng-content></ng-content>
    </aside>
  `,
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [ // :enter
        style({ transform: 'translateX(-100%)' }),
        animate(animationDuration)
      ]),
      transition('* => void', [ // :leave
        animate(animationDuration, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ],
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent implements OnInit, OnDestroy, AfterContentInit {

  @ContentChild(FlyoutHeaderComponent) header?: FlyoutHeaderComponent;

  get isOpen() {
    return this._open;
  }

  // tslint:disable-next-line no-any the result can return anyting
  private result = new Subject<any>();

  private _open = false;

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.close();
  }

  constructor() { }

  ngOnInit() {
    //
  }

  ngOnDestroy() {
    this.result.complete();
  }

  ngAfterContentInit() {
    if (this.header) {
      this.header.close.subscribe(() => this.close());
    }
  }

  /**
   * Open the flyout and get a result `Observable`
   * No need to unsubscribe from this `Observable` as it will be automatically completed when the
   * flyout closes
   */
  // tslint:disable-next-line no-any the result can return anyting
  open(): Observable<any> {
    this._open = true;
    return this.result.asObservable();
  }

  /**
   * Close the flyout and optionally pass a result
   */
  // tslint:disable-next-line no-any the result can return anyting
  close(result?: any) {
    this._open = false;
    this.result.next(result);
    this.result.complete();
  }

  /**
   * Toggle the flyout and optionally pass a result (when closing)
   */
  // tslint:disable-next-line no-any the result can return anyting
  toggle(result?: any) {
    this._open ? this.close(result) : this.open();
  }

}
