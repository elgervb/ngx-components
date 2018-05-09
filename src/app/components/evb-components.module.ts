import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button';
import { WizardModule } from './wizard';
import { FilePickerModule } from './file-picker';
import { ProgressbarModule } from './progressbar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule.forRoot(),
    FilePickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    WizardModule.forRoot()
  ],
  declarations: [],
  exports: [
    ButtonModule,
    FilePickerModule,
    ProgressbarModule,
    WizardModule
  ]
})
export class EvbComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EvbComponentsModule,
      providers: []
    }
  }
}
