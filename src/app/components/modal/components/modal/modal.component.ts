import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'evb-modal',
  template: `
    <evb-backdrop (click)="close()"></evb-backdrop>
    <aside>
      <ng-template #contentHost></ng-template>
    </aside>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line no-any
  @ViewChild('contentHost', { read: ViewContainerRef }) contentHost: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //
  }

  // tslint:disable-next-line no-any
  setComponent<T>(component: Type<T>): T {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.contentHost.clear();

    const componentRef = this.contentHost.createComponent(componentFactory);

    return componentRef.instance;
  }

  close() {

  }

  dismiss() {

  }
}
