import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlyoutComponent } from './flyout/flyout.component';
import { FlyoutHeaderComponent } from './flyout-header/flyout-header.component';
import { FlyoutToggleDirective } from './flyout-toggle/flyout-toggle.directive';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  declarations: [
    FlyoutComponent,
    FlyoutHeaderComponent,
    FlyoutToggleDirective
  ],
  exports: [
    FlyoutComponent,
    FlyoutHeaderComponent,
    FlyoutToggleDirective
  ]
})
export class FlyoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlyoutModule,
      providers: []
    };
  }
}
