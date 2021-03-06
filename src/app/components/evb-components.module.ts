import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ButtonModule } from './button';
import { CardModule } from './card/card.module';
import { ChartsModule } from './charts/charts.module';
import { ContainerComponent } from './container';
import { ContainerModule } from './container/container.module';
import { DrawingModule } from './drawing/drawing.module';
import { FilePickerModule } from './file-picker';
import { FlyoutModule } from './flyout/flyout.module';
import { FormModule } from './form/form.module';
import { ListModule } from './list/list.module';
import { ModalModule } from './modal/modal.module';
import { ProgressbarModule } from './progressbar';
import { SpinnerModule } from './spinner/spinner.module';
import { WizardModule } from './wizard';

@NgModule({
  imports: [
    ButtonModule.forRoot(),
    CardModule.forRoot(),
    ChartsModule.forRoot(),
    CommonModule,
    ContainerModule.forRoot(),
    DrawingModule.forRoot(),
    FilePickerModule.forRoot(),
    FlyoutModule.forRoot(),
    FormModule.forRoot(),
    ListModule.forRoot(),
    ModalModule.forFeature(),
    ProgressbarModule.forRoot(),
    SpinnerModule.forRoot(),
    WizardModule.forRoot()
  ],
  exports: [
    ButtonModule,
    ChartsModule,
    CardModule,
    ChartsModule,
    ContainerComponent,
    DrawingModule,
    FilePickerModule,
    FlyoutModule,
    FormModule,
    ListModule,
    ModalModule,
    ProgressbarModule,
    SpinnerModule,
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
