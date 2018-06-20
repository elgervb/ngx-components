import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalService } from './services/modal.service';
import { AlertComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ]
})
export class ModalModule {
  static forFeature(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        ModalService
      ]
    };
  }
}
