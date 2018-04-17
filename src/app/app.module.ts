import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutComponent } from './charts/donut/donut.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    FilePickerComponent,
    ProgressbarComponent,
    ButtonComponent
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
