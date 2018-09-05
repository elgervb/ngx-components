import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ButtonModule } from '../button';
import { ProgressbarModule } from '../progressbar/progressbar.module';

import { FilePickerComponent } from './picker/file-picker.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ProgressbarModule
  ],
  declarations: [
    FilePickerComponent
  ],
  exports: [
    FilePickerComponent
  ]
})
export class FilePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FilePickerModule,
      providers: []
    };
  }
}
