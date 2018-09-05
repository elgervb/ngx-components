import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardBodyComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardBodyComponent
  ]
})
export class CardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardModule,
      providers: []
    };
  }
}
