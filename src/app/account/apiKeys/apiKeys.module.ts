import { NgModule } from '@angular/core';
import { ApiKeysComponent } from './apiKeys.component';
import { CommonModule } from '@angular/common';
import { NgMaterialsModule } from '../../core/ngMaterials/ng-materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [ApiKeysComponent],
  imports: [
    CommonModule,
    NgMaterialsModule,
    ReactiveFormsModule
  ]
})
export class ApiKeysModule {}
