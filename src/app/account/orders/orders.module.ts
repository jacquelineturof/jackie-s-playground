import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { NgMaterialsModule } from '../../core/ngMaterials/ng-materials.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    NgMaterialsModule
  ]
})
export class OrdersModule {}
