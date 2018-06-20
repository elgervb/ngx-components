<<<<<<< HEAD
import {
  Injectable, ComponentFactoryResolver, Injector, Type, ViewContainerRef, ComponentRef, ApplicationRef, EmbeddedViewRef
} from '@angular/core';
=======
import { Injectable, ComponentFactoryResolver, Inject, Injector, Type, ViewContainerRef } from '@angular/core';
>>>>>>> modal: initual version of modal service

@Injectable({
  providedIn: 'root'
})
export class ModalService {

<<<<<<< HEAD
  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open<T>(componentClass: Type<T>, viewContainer?: ViewContainerRef): ComponentRef<T> {
    const injector = viewContainer ? viewContainer.parentInjector : this.injector;

    const component = this.createComponent(componentClass, injector);

    this.appRef.attachView(component.hostView);

    // check if we know on which viewContainer to attach
    if (viewContainer) {
      this.attachToDom(viewContainer, component);
    } else {
      this.attachToBody(component);
    }

    return component;
  }

  close<T>(component: ComponentRef<T>) {
    if (component) {
      this.appRef.detachView(component.hostView);
      component.destroy();
    }
  }

  /**
   * Dynamically create a component
   */
  private createComponent<T>(componentClass: Type<T>, injector: Injector): ComponentRef<T> {
    const factory = this.factoryResolver.resolveComponentFactory(componentClass);
    return factory.create(injector);
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
=======
  private factoryResolver: ComponentFactoryResolver;

  constructor(
    @Inject(ComponentFactoryResolver) factoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.factoryResolver = factoryResolver;
    console.log(this.injector);
  }

  open<T>(componentClass: Type<T>, rootViewContainer: ViewContainerRef): T {
    const factory = this.factoryResolver
      .resolveComponentFactory(componentClass);
    const component = factory.create(rootViewContainer.parentInjector);
    rootViewContainer.insert(component.hostView);

    return component.instance;
>>>>>>> modal: initual version of modal service
  }
}
