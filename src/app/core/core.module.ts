import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';

import { NgMaterialsModule } from './ngMaterials/ng-materials.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NgMaterialsModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule {}
