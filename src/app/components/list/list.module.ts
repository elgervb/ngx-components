import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    ListFilterComponent
  ],
  exports: [
    ListComponent,
    ListFilterComponent
  ]
})
export class ListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ListModule,
      providers: []
    };
  }
}
