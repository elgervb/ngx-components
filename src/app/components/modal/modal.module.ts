import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { ModalService } from './services/modal.service';
import { TestComponent } from './test/test.component';

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
        ModalService
      ]
    };
  }
}
