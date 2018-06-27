import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { TestComponent } from './test/test.component';
import { AlertComponent } from './components';
import { ModalComponent } from './components';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { TestComponent } from './test/test.component';
import { ModalStackService } from './services/modal-stack.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    BackdropComponent,
    TestComponent
  ],
  entryComponents: [
    ModalComponent,
    TestComponent
  ],
  exports: [
    AlertComponent
    ModalComponent,
    BackdropComponent,
    TestComponent
  ]
})
export class ModalModule {
  static forFeature(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        ModalService,
        ModalStackService
      ]
    };
  }
}
