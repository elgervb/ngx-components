import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    }
  }
}
