import { Injectable, ComponentFactoryResolver, Inject, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

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
  }
}
