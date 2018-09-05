import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressbarComponent
  ],
  exports: [
    ProgressbarComponent
  ]
})
export class ProgressbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProgressbarModule,
      providers: []
    };
  }
}
