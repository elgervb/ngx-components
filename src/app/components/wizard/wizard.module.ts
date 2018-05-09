import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { WizardFooterComponent } from './wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardComponent } from './wizard/wizard.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    WizardComponent,
    WizardFooterComponent,
    WizardHeaderComponent,
    WizardStepComponent
  ],
  exports: [
    WizardComponent,
    WizardFooterComponent,
    WizardHeaderComponent,
    WizardStepComponent
  ]
})
export class WizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WizardModule,
      providers: []
    };
  }
}
