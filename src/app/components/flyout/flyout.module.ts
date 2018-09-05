import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlyoutHeaderComponent } from './flyout-header/flyout-header.component';
import { FlyoutToggleDirective } from './flyout-toggle/flyout-toggle.directive';
import { FlyoutComponent } from './flyout/flyout.component';

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
