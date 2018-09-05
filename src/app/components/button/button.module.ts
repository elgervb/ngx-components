import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ButtonModule,
      providers: []
    };
  }
}
