import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerBallsComponent } from './spinner-balls/spinner-balls.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerBallsComponent
  ],
  exports: [
    SpinnerBallsComponent
  ]
})
export class SpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpinnerModule,
      providers: []
    };
  }
}
