import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';

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
