import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef, HostListener, ComponentRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'evb-modal',
  template: `
    <evb-backdrop (click)="close()"></evb-backdrop>
    <aside class="modal">
      <ng-template #contentHost></ng-template>
    </aside>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line no-any
  @ViewChild('contentHost', { read: ViewContainerRef }) contentHost: ViewContainerRef;

  // tslint:disable-next-line no-any
  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modalService: ModalService) { }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.close();
  }

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
    this.modalService.close(this.componentRef);
  }

  dismiss() {
    this.modalService.close(this.componentRef);
  }
}
