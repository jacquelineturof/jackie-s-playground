import { NgModule } from '@angular/core';
import { ApiKeysComponent } from './apiKeys.component';
import { CommonModule } from '@angular/common';
import { NgMaterialsModule } from '../../core/ngMaterials/ng-materials.module';

@NgModule({
  declarations: [ApiKeysComponent],
  imports: [
    CommonModule,
    NgMaterialsModule
  ]
})
export class ApiKeysModule {}
