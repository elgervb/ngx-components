import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button';
import { WizardModule } from './wizard';
import { FilePickerModule } from './file-picker';
import { ProgressbarModule } from './progressbar';
import { ListModule } from './list/list.module';
import { MessageboxComponent } from './messagebox/messagebox.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule.forRoot(),
    FilePickerModule.forRoot(),
    ListModule.forRoot(),
    ProgressbarModule.forRoot(),
    WizardModule.forRoot()
  ],
  declarations: [MessageboxComponent],
  exports: [
    ButtonModule,
    FilePickerModule,
    ListModule,
    ProgressbarModule,
    WizardModule
  ]
})
export class EvbComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EvbComponentsModule,
      providers: []
    };
  }
}
