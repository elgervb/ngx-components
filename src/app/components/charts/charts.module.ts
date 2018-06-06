import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from './donut/donut.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

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
