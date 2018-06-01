import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContainerModule,
      providers: []
    };
  }
}
