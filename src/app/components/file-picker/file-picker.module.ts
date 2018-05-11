import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from './picker/file-picker.component';
import { ProgressbarModule } from '../progressbar/progressbar.module';
import { ButtonModule } from '../button';

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
