import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutComponent } from './charts/donut/donut.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ButtonComponent } from './button/button.component';
import { PanelComponent } from './panel/panel.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { WizardFooterComponent } from './wizard-footer/wizard-footer.component';
import { ListComponent } from './list/list.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    FilePickerComponent,
    ListComponent,
    ListFilterComponent,
    ProgressbarComponent,
    ButtonComponent,
    PanelComponent,
    WizardComponent,
    WizardStepComponent,
    WizardHeaderComponent,
    WizardFooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
