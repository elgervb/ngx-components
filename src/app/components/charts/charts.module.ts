import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { DonutComponent } from './donut/donut.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DonutComponent
  ],
  exports: [
    DonutComponent
  ]
})
export class ChartsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChartsModule,
      providers: []
    };
  }
}
