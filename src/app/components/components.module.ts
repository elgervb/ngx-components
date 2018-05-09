import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button';
import { WizardModule } from './wizard';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    WizardModule
  ],
  declarations: [],
  exports: [
    ButtonModule,
    WizardModule
  ]
})
export class ComponentsModule { }
