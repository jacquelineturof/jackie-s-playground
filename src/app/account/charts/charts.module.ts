import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts.component';
import { CommonModule } from '@angular/common';
import { NgMaterialsModule } from '../../core/ngMaterials/ng-materials.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    NgMaterialsModule
  ]
})
export class ChartsModule {}
