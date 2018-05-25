import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button';
import { WizardModule } from './wizard';
import { FilePickerModule } from './file-picker';
import { ProgressbarModule } from './progressbar';
import { ListModule } from './list/list.module';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [
    ButtonModule.forRoot(),
    CardModule.forRoot(),
    CommonModule,
    FilePickerModule.forRoot(),
    ListModule.forRoot(),
    ProgressbarModule.forRoot(),
    WizardModule.forRoot()
  ],
  declarations: [MessageboxComponent],
  exports: [
    ButtonModule,
    CardModule,
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
