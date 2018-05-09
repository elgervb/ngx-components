import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DonutComponent } from './charts/donut/donut.component';
import { ButtonModule } from './components/button';
import { WizardModule } from './components/wizard';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    FilePickerComponent,
    ListComponent,
    ListFilterComponent,
    PanelComponent,
    ProgressbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
