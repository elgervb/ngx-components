import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { DrawComponent } from './draw/draw.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DrawComponent
  ],
  exports: [
    DrawComponent
  ]
})
export class DrawingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DrawingModule,
      providers: []
    };
  }
}
