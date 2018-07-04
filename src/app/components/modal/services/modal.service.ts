import {
  Injectable, ComponentFactoryResolver, Injector, Type, ViewContainerRef, ComponentRef, ApplicationRef, EmbeddedViewRef
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { ActiveModal } from './active.modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open<T>(componentClass: Type<T>, viewContainer?: ViewContainerRef): ComponentRef<ModalComponent> {
    const injector = viewContainer ? viewContainer.parentInjector : this.injector;

    const activeModal = new ActiveModal();

    const modal = this.createComponent(ModalComponent, this.createInjector(activeModal, injector));
    activeModal.close = () => this.close(modal);
    activeModal.dismiss = () => this.close(modal);

    const component = this.createContentComponent(modal, componentClass, injector);
    this.attachToDom(modal.instance.contentHost, component);


    this.appRef.attachView(modal.hostView);
    // check if we know on which viewContainer to attach
    if (viewContainer) {
      this.attachToDom(viewContainer, modal);
    } else {
      this.attachToBody(modal);
    }
    window.document.body.classList.add('modal_open');

    return modal;
  }

  close<T extends ModalComponent>(modal: ComponentRef<T>) {
    if (modal) {
      this.appRef.detachView(modal.hostView);
      modal.destroy();

      window.document.body.classList.remove('modal_open');
    }
  }

  /**
   * Dynamically create a component
   */
  private createComponent<T>(componentClass: Type<T>, injector: Injector): ComponentRef<T> {
    const factory = this.factoryResolver.resolveComponentFactory(componentClass);
    return factory.create(injector);
  }

  // tslint:disable-next-line no-any
  private createContentComponent(modal: ComponentRef<ModalComponent>, component: Type<any>, injector: Injector): ComponentRef<any> {
    const componentFactory = this.factoryResolver.resolveComponentFactory(component);
    modal.instance.contentHost.clear();

    const activeModal = new ActiveModal();
    activeModal.close = () => this.close(modal);
    activeModal.dismiss = () => this.close(modal);

    const modalContentInjector = this.createInjector(activeModal, injector);

    const componentRef = modal.instance.contentHost.createComponent(componentFactory, 0, modalContentInjector);

    return componentRef;
  }

  private createInjector(activeModal: ActiveModal, injector: Injector) {
    const modalContentInjector = Injector.create([{ provide: ActiveModal, useValue: activeModal }], injector);
    return modalContentInjector;
  }

  /**
   * Attach the component to the view container specified
   */
  private attachToDom<T>(viewContainer: ViewContainerRef, component: ComponentRef<T>) {
    viewContainer.insert(component.hostView);
  }

  private attachToBody<T>(component: ComponentRef<T>) {
    const domElem = (component.hostView as EmbeddedViewRef<T>).rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }
}
