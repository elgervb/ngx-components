import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    ListFilterComponent,
    ListItemComponent
  ],
  exports: [
    ListComponent,
    ListItemComponent,
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
