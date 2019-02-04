import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';

import { NgMaterialsModule } from './ngMaterials/ng-materials.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NgMaterialsModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ],
  providers: [],
})
export class CoreModule {}
