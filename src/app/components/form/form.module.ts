import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
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
