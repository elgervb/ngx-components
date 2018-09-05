import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FormControlComponent } from './formcontrol/formcontrol.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormControlComponent
  ],
  exports: [
    FormControlComponent
  ]
})
export class FormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormModule,
      providers: []
    };
  }
}
