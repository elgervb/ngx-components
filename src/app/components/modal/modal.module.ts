import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalService } from './services/modal.service';
<<<<<<< HEAD
import { ModalComponent } from './components';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { TestComponent } from './test/test.component';
=======
import { AlertComponent } from './components';
>>>>>>> modal: initual version of modal service

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
<<<<<<< HEAD
    ModalComponent,
    BackdropComponent,
    TestComponent
  ],
  entryComponents: [
    ModalComponent,
    TestComponent
  ],
  exports: [
    ModalComponent
=======
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  exports: [
    AlertComponent
>>>>>>> modal: initual version of modal service
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
