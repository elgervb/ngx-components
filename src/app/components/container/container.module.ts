import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

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
