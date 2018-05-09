import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DonutComponent } from './charts/donut/donut.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { AppRoutingModule } from './app-routing.module';
import { EvbComponentsModule } from './components/evb-components.module';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    ListComponent,
    ListFilterComponent,
    PanelComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    EvbComponentsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
